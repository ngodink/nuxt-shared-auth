# Nuxtjs shared authentication using postMessage
> nuxt-shared-auth

This is only work in SinglePage Application (mode: spa) only

## Build Setup
> Im using yarn here, if you use npm, just change yarn to npm run

Installing dependencies
``` bash
# install dependencies
$ yarn install
```

Lets write a code
``` bash
# serve ACCOUNT with hot reload at localhost:3000
$ yarn account:dev
# serve BLOG with hot reload at localhost:3001
$ yarn blog:dev
# serve ACCOUNT & BLOG with concurrently
$ yarn dev
```

Build or generate
``` bash
# build for production and launch server
$ yarn account:build | yarn blog:build | yarn build

# generate static project
$ yarn account:generate | yarn blog:generate | yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).