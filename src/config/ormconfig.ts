import * as typeorm from "typeorm";

const options: typeorm.ConnectionOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  //entities: [],
  timezone: "+09:00",
  synchronize: true,
  logging: false,
  charset: "utf8mb4",
  entities: ["src/models/entities/**/*.ts"]
};

export default async () => {
  await typeorm.createConnection(options);
};
