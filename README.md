# My First NPM Package 🎯

This is a basic npm package that greets people.

## other ways to set

npm set registry http://localhost:4873/

npm set registry https://registry.npmjs.org/

npm config set registry https://repo.forge.lmig.com/artifactory/api/npm/npm/ 

## more advanced with additional functionalities like:

Greeting based on time (Morning, Afternoon, Evening). 

Adding a random emoji.

Supporting multiple languages (English, Hindi, Spanish, etc.).

Adding a farewell message.

## Usage

in vanilla JS/TS:

const { greet, farewell } = require('@my-scope/hello-package');

in Angular, React:

import { greet, farewell } from '@my-scope/hello-package';

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
