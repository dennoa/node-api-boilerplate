# backend-boilerplate

* Uses ESM to allow ES modules in Node9+
* Uses Winston for logging
* Uses mongoose for db stuff
* Uses Ajv for validation

## Notes

This boilerplate is built as a component driven api. A component should be able to be dropped at any stage with minimal dependencies within other areas of the project.

Use ES6+ as much as possible, including async await, spread operators, destructuring and imports.

### RULES

* Unit tests must be present for all logic.
* No unnecessary abstraction - KISS principles.


### Quick start (Development)

```
git clone git@github.com:iag-edge-labs/backend-boilerplate.git
cd backend-boilerplate
npm i
npm run dev
```

Without nodemon
`npm start`

Swagger JSON at <http://localhost:3001/swagger>

### Create a new api entity

API entities are in folders under /components. Each folder is responsible for a different entity (e.g. user, policy)

1.  Create a new folder for your entity. It should have both api and swagger subfolders to support the api routes and documentation respectively
2.  Include the api routes in /api/index.js
3.  Include the swagger doc fragments in the combined /api/swagger/doc.js
4.  Reuse request schemas for both Ajv validation and swagger docs

### Basic view engine

`/public`

The project includes a basic index pug/jade file. It is used to just give feedback that the server is running and to display a basic page. This, by no means is a public facing front-end application.
Cheatsheet: <https://devhints.io/pug>

### Troubleshooting

* Ensure you have an SSH key set up with Github to allow any dependencies to be installed.
* Having issues with installing github dependencies? Run `ssh-keyscan github.com >> ~/.ssh/known_hosts`
