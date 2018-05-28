# node-api-boilerplate

* ESM to allow ES modules in Node
* Mongoose for db stuff <https://www.npmjs.com/package/mongoose>
* Ajv for validation <https://www.npmjs.com/package/ajv>

## Getting started

Make sure you have MongoDB running locally.

```
git clone git@github.com:dennoa/node-api-boilerplate.git
cd node-api-boilerplate
npm i
npm run dev
```

Without nodemon
`npm start`

Swagger JSON at <http://localhost:3001/swagger>

## Api components

API components are in folders under /components. Each folder would normally be responsible for a different entity (e.g. user)

1.  A component folder has both api and swagger subfolders to support the api routes and documentation respectively
2.  Include the api routes in /routes.js
3.  Include the swagger doc fragments in /swagger.js
4.  The schema subfolder holds request schema definitions that are reused by both Ajv validation and swagger

## Tests

Tests are located under the `/test` folder with subfolders for each component or area being tested.

Uses Ava: <https://www.npmjs.com/package/ava> although the ability to run tests concurrently is highly under-utilised. Imported dependencies result in the same dependency module instance being used across all tests - which means tests end up using the stubbed behaviour of other tests. Because of this, many of the tests are run in serial.

The tests usually cover end-to-end request handling using supertest: <https://www.npmjs.com/package/supertest> with the mongoose model being stubbed to avoid database access.

## Landing Page

`/landing-page`

Includes a basic index pug/jade file used to display a landing page with instructions. NOT intended to support a complex front-end app.
See <https://devhints.io/pug>
