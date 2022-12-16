import 'reflect-metadata';
import * as dotenv from 'dotenv';

dotenv.config();

import { sequelize } from './models/index';
import app from './app';

async function run() {
  try {
    await sequelize.sync();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server Start: Listen on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

run();
