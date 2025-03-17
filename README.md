# Private NPM Package 🎯

This is a basic npm package that greets people. Its published in AWS CodeArtifact Free Tier

![AWS CodeArtifact Version](https://img.shields.io/npm/v/@my-scope/hello-package?style=for-the-badge&registry=https://sanjeet-registry-612233812744.d.codeartifact.ap-south-1.amazonaws.com/npm/my-private-npm/)

![AWS CodeArtifact Version](https://github.com/sanjeetkumaritoutlook/private-npm/blob/main/version.json?timestamp=${{ github.run_id }})



## other ways to set

npm set registry http://localhost:4873/

npm set registry https://registry.npmjs.org/

npm config set registry https://repo.forge.lmig.com/artifactory/api/npm/npm/ 

npm config set registry https://sanjeet-registry-612233812744.d.codeartifact.ap-south-1.amazonaws.com/npm/my-private-npm/

new  registry-url: https://sanjeet-registry-612233812744.d.codeartifact.ap-south-1.amazonaws.com/npm/my-private-npm/


## check which registry

npm config get registry

## check complete npm configuration

npm config list


## more advanced with additional functionalities like:

Greeting based on time (Morning, Afternoon, Evening). 

Adding a random emoji.

Supporting multiple languages (English, Hindi, Spanish, etc.).

Adding a farewell message.

## Usage

in vanilla JS/TS:

const { greet, farewell, getCurrentDate, toUpperCase, getRandomNumber,toLowerCase } = require('@my-scope/hello-package');

in Angular, React:

import { greet, farewell, getCurrentDate, toUpperCase, getRandomNumber,toLowerCase } from '@my-scope/hello-package';

## unit test using jest

npm install jest --save-dev

Create a folder called __tests__ and inside it, create greet.test.js:

Add Jest to package.json

under scripts:

   "test": "jest"

npm test
 
 Publish:
 
 npm version patch
 
npm publish
