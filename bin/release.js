const readlineSync = require('readline-sync')
const { execSync } = require('child_process')
const { Octokit } = require('@octokit/rest');
require('dotenv').config();

const releaseBranch = 'master'
const defaultBranch = 'feature/release-script'

const owner = 'ogawatti'
const repository = 'nuxt-sample'

async function main() {
    const currentBranch = execSync(`git branch --show-current`).toString().trim()
    if (currentBranch !== defaultBranch) {
        throw new Error(`Current branch is not default (${defaultBranch}).`)
    }

    const gitStatus = execSync('git status --short').toString().trim()
    if (gitStatus) {
        throw new Error('Git status is not empty.')
    }

    const githubAccessToken = process.env.GITHUB_ACCESS_TOKEN
    if (!githubAccessToken) {
        throw new Error('GitHub access token does not set.')
    }
    const octokit = new Octokit({ auth: githubAccessToken })

    const currentVersion = process.env.npm_package_version
    const targets = ['major', 'minor', 'patch']

    let index = readlineSync.keyInSelect(targets, 'Which release?')
    let target = targets[index]

    let major = Number(currentVersion.split('.')[0])
    let minor = Number(currentVersion.split('.')[1])
    let patch = Number(currentVersion.split('.')[2])
    eval(`${target}++`)
    const releaseVersion = `${major}.${minor}.${patch}`

    console.log(`current branch: ${defaultBranch}`)
    console.log(`current version: ${currentVersion}`)
    let result = readlineSync.keyInYN(`release version: ${releaseVersion} ?: `)
    if (!result) {
        process.exit(0)
    }
    const tagName = `v${releaseVersion}`

    console.log('merged commits:')

    response = await octokit.repos.getLatestRelease({ owner: owner, repo: repository })
    let latestTagName = response.data.tag_name
    response = await octokit.repos.compareCommits({
        owner: owner, repo: repository, base: latestTagName, head: defaultBranch
    })

    response.data.commits.forEach(data => {
        if (data.commit.message.match(/^Merge pull request/)) {
          console.log(`  ${data.commit.message.split('\n').shift()}`)
        }
    })
    console.log()
    result = readlineSync.keyInYN('Do you want this branch ?: ')
    if (!result) {
        process.exit(0)
    }

    // merge master branch
    commands = [
        `git pull origin ${defaultBranch}`,
        `npm version ${target}`,
        `git push origin ${defaultBranch}`,
        `git checkout ${releaseBranch}`,
        `git pull origin ${releaseBranch}`,
        `git merge ${defaultBranch}`,
        `git push origin ${releaseBranch}`,
        `git tag -f ${tagName}`,
        `git push -f origin ${tagName}`
    ].forEach(command => {
        console.log(`$ ${command}`)
        execSync(command)
        console.log()
    })

    // create github release
    const releaseName = readlineSync.question('Release name: ');
    response = await octokit.repos.createRelease({ owner: owner, repo: repository, tag_name: tagName, name: releaseName })
    console.log(`create a release: ${response.data.html_url}`)
}

main().catch(error => {
    console.error(error)
    process.exit(1)
})
