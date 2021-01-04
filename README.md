[![Netlify Status](https://api.netlify.com/api/v1/badges/07403523-d261-41ad-870a-c02a3208aa8a/deploy-status)](https://app.netlify.com/sites/watti-nuxt-sample/deploys)

# nuxt-sample

> Static site for a sample image.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# serve netlify functions with hot reload at localhost:9000
$ npm run serve

# serve firebase functions at localhost:5001
$ firebase emulators:start

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy

### Netlify / Vercel / AWS Amplify

master branch push.

### Firebase

```
$ firebase deploy
```

### AWS S3

```
$ aws s3 sync ./dist s3://watti-nuxt-sample
```

## Hosting URL

| Enabled | Service      | URL                                                               |
|---------|--------------|-------------------------------------------------------------------|
| ○       | Netlify      | https://watti-nuxt-sample.netlify.app/                            |
| ○       | Vercel       | https://watti-nuxt-sample.vercel.app/                             |
| ○       | Firebase     | https://sample-image-8901e.web.app                                |
| ×       | AWS S3       | http://watti-nuxt-sample.s3-website-ap-northeast-1.amazonaws.com/ |
| ×       | AWS Amplify  | https://master.d29jonr543ipnj.amplifyapp.com/                     |
| ○       | Github Pages | https://ogawatti.github.io/nuxt-sample/                           |

## Form

| Enabled | Service       |
|---------|---------------|
| ○       | Netlify Forms |
| ○       | Formspree     |

