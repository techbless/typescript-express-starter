import 'reflect-metadata';
import * as dotenv from 'dotenv';

// Must be placed before import ormconfig.
dotenv.config();

import createConnection from './config/ormconfig';
import app from './app';


createConnection()
  .then(async () => {
    const PORT: number = +process.env.PORT! || 3000;

    app.listen(PORT, (err) => {
      if (err) throw err;
      else console.log('Server Start: Listen on port ', PORT);
    });
  })
  .catch((err) => {
    console.log('TypeORM connection error: ', err);
  });
