# typescript-express-starter

### No more wasting your time writing an ignition codes for Express using TypeScript.

## This Starter includes
#### TypeScript + Express + TypeORM + Passport

## Requirement
| Requirement | Reason |
|:-----------:|-------------------------------------------------|
|`mysql`      | Mysql Server is required for TypeORM            |

## What you should do after cloning

1. `yarn install`
2. `yarn test`
3. Check working fine.

## Npm / Yarn Scripts
| Npm Script | Description |
| :-----------------------: | ---------------------------------------------------------------------------------------------------- |
| `start`                   | Runs node on `dist/server.js` which is the apps entry point. before this, you should build           |
| `start:dev`               | Runs node on `src/server.ts` with `ts-node` for development environment. watching your codes change  |
| `prebuild`                | Copys asset files in `src/views` and `src/public` to `dist` directory before `tsc`                   |
| `build`                   | Runs all build tasks, compile TypeScript codes after copying asset files in views, public            |
| `test`                    | Runs tests using Mocha and Chai                                                                      |
| `lint`                    | Runs ESLint on project files                                                                         |
| `lint:fix`                | Runs ESLint on project files and fix codes                                                           |

## Project Structure
 - This is not valid at this time. will be updated.

```
typescript-express-starter
├─ .env
├─ dist
│   └─ [ build files ]
└─ src
      ├─ app.ts
      ├─ server.ts
      ├─ controllers
      │   └─ index.controller.ts
      ├─ models
      │   └─ example.model.ts  <- Should be removed, a template for models
      ├─ public
      │   └─ test.txt  <- Should be removed, just for test
      ├─ routes
      │   └─ index.route.ts
      ├─ test
      │   └─ starter.spec.ts
      └─ views
            └─  index.ejs
```

## License

MIT
