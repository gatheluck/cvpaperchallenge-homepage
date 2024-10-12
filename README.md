# cvpaperchallenge-homepage

> cvpaper.challenge homepage project

## Build Setup

``` bash
# install dependencies
$ yarn install

# Specify old OpenSSL provider to avoid error
# https://qiita.com/kokogento/items/f5b176d05c621223670b
$ export NODE_OPTIONS=--openssl-legacy-provider

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
