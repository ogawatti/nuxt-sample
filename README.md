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

### Netlify

master branch push.

### Firebase

```
$ firebase deploy
```

### AWS S3

```
$ aws s3 sync ./dist s3://watti-nuxt-sample
```

### AWS Amplify

master branch push.
