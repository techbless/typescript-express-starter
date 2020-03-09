import * as dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT: number = parseInt(process.env.PORT!) || 3000;

app.listen(PORT, err => {
  if (err) throw err;
  else console.log("Server Start: Listen on port ", PORT);
});
