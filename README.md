# backend-boilerplate

* Uses ESM to allow ES modules in Node
* Uses Winston for logging
* Uses mongoose for db stuff
* Uses Ajv for validation

## Getting started

```
git clone git@github.com:dennoa/node-api-boilerplate.git
cd node-api-boilerplate
npm i
npm run dev
```

Without nodemon
`npm start`

Swagger JSON at <http://localhost:3001/swagger>

## Api entities

API entities are in folders under /components. Each folder would normally be responsible for a different entity (e.g. user)

1.  Each component folder should have both api and swagger subfolders to support the api routes and documentation respectively
2.  Include the api routes in /components/index.js
3.  Include the swagger doc fragments in the combined /components/swagger/doc.js
4.  Can normally reuse request schemas for both Ajv validation and swagger docs

## Notes

### View engine

`/public`

Includes a basic index pug/jade file used to display a basic page with instructions. You would not normally serve your front-end app from here.
See <https://devhints.io/pug>
