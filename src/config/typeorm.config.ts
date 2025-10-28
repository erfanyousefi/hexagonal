import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {config} from "dotenv";
import {join} from "path";

config();
config({
  path: join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});
export default function getTypeOrmConfig(): TypeOrmModuleOptions {
  const {
    MYSQL_DBNAME,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_HOST,
    DB_SYNC,
  } = process.env;
  return {
    type: "mysql",
    database: MYSQL_DBNAME,
    host: MYSQL_HOST,
    port: Number(MYSQL_PORT),
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    synchronize: true,
    entities: [
      "dist/**/**/**/*.entity{.ts,.js}",
      "dist/**/**/*.entity{.ts,.js}",
    ],
    migrations: ["dist/migrations/*{.ts,.js}"],
  };
}
