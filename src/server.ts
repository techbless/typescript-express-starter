import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();

import createConnection from "./config/ormconfig";
import app from "./app";

createConnection()
  .then(async () => {
    const PORT: number = parseInt(process.env.PORT!) || 3000;
    app.listen(PORT, err => {
      if (err) throw err;
      else console.log("Server Start: Listen on port ", PORT);
    });
  })
  .catch(err => {
    console.log("TypeORM connection error: ", err);
  });
