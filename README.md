# node-api-boilerplate

* ESM to allow ES modules in Node
* mongoose for db stuff
* Ajv for validation

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

## Api components

API components are in folders under /components. Each folder would normally be responsible for a different entity (e.g. user)

1.  A component folder has both api and swagger subfolders to support the api routes and documentation respectively
2.  Include the api routes in /routes.js
3.  Include the swagger doc fragments in /swagger.js
4.  The schema subfolder holds request schema definitions that are reused by both Ajv validation and swagger

## Landing Page

`/landing-page`

Includes a basic index pug/jade file used to display a landing page with instructions. NOT intended to support a complex front-end app.
See <https://devhints.io/pug>
