# Private NPM Package 🎯

This is a basic npm package that greets people. Its published in AWS CodeArtifact Free Tier

https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=AWS%20CodeArtifact%20Version&query=$.version&url=https://raw.githubusercontent.com/sanjeetkumaritoutlook/private-npm/main/version.json)

https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsanjeetkumaritoutlook%2Fprivate-npm%2Fmain%2Fversion.json&label=AWS%20CodeArtifact&query=%24.message&color=green




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
