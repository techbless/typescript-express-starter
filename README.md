# typescript-express-starter

### No more wasting your time writing a ignition code for Express using TypeScript.

## This Starter includes
#### TypeScript + Express + TypeORM + Passport

## What you should do after cloning

1. `yarn install`
2. `yarn test`
3. Check working fine.

## Npm / Yarn Scripts

For Initial Test  
`yarn test`

For Build  
`yarn build`

For Production (You should `yarn build` before)  
`yarn start`

For Development (nodemon will watch your codes and refresh)  
`yarn start:dev`

## Directory Structure

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
