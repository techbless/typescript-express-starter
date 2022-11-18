<p align="center">
  <img src="https://github.com/techbless/typescript-express-starter/blob/master/logo.png?raw=true" alt="logo">
</p>
<p align="center">
  <img src="https://travis-ci.org/techbless/typescript-express-starter.svg?branch=master" alt="Build Status">
  <img src="https://david-dm.org/techbless/typescript-express-starter.svg" alt="Dependency Status">
  <img src="https://david-dm.org/techbless/typescript-express-starter/dev-status.svg" alt="devDependency Status">
</p>
<h3 align="center">No more wasting your time writing an ignition codes for Express using TypeScript.</h3>

## Get Ready to Fly on

**TypeScript + Express + Sequelize + Passport**

## Requirement

| Requirement | Reason                                 |
| :---------: | -------------------------------------- |
|   `mysql`   | Mysql Server is required for Sequelize |

## Npm / Yarn Scripts

| Npm Script  | Description                                                                                         |
| :---------: | --------------------------------------------------------------------------------------------------- |
|   `start`   | Runs node on `dist/server.js` which is the apps entry point. before this, you should build          |
| `start:dev` | Runs node on `src/server.ts` with `ts-node` for development environment. watching your codes change |
| `prebuild`  | Copys asset files in `src/views` and `src/public` to `dist` directory before `tsc`                  |
|   `build`   | Runs all build tasks, compile TypeScript codes after copying asset files in views, public           |
|   `test`    | Runs tests using Mocha and Chai                                                                     |
|   `lint`    | Runs ESLint on project files                                                                        |
| `lint:fix`  | Runs ESLint on project files and fix codes                                                          |

## Project Structure

- This is not valid at this time. will be updated.

```
typescript-express-starter
├─ .env
├─ dist
│   └─ [ build files ]
└─ src
      ├─ app.ts ← instantiate app
      ├─ server.ts ← entry point which starts server
      ├─ @types
      |  └─ express.d.ts ← override req.User types for passport.js
      ├─ config
      |  ├─ passport.ts ← config for passport.js
      |  └─ sequelize.ts ← config for sequelize.js
      ├─ controllers
      |   ├─ user.ts ← controller for accounts
      |   ├─ echo.ts ← controller for echo test, recommend to delete
      |   └─ sample.ts ← sample template controller
      ├─ middlewares
      |   ├─ error_handler.ts ← middlewares handling all errors.
      ├─ models
      │   ├─ index.ts ← export sequelize instance
      |   ├─ sequelize.ts ← instantiate sequelize.ts
      |   ├─ user.ts ← User model
      |   └─ sample.ts ← sample template model
      ├─ public
      │   └─ common.css ← static file which can be accessed with '/common.css'
      ├─ routes
      |   ├─ user.ts ← router for accounts
      |   ├─ echo.ts ← router for echo test
      |   ├─ sample.ts ← sample template router
      |   └─ async.wrapper.ts ← wrapper for async controller function.
      └─ test
          └─ starter.spec.ts ← initial test cases

```

## License

MIT
