import { config } from "dotenv";
import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";
config();
config({
  path: join(process.cwd(), `.env.${process.env.NODE_ENV}`)
}) 
export function TypeOrmDataSourceConfig(): DataSourceOptions {
    const {MYSQL_DBNAME, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_HOST} = process.env;
    return {
        type: "mysql",
        database: MYSQL_DBNAME,
        host: MYSQL_HOST,
        port: Number(MYSQL_PORT), 
        username: MYSQL_USERNAME,
        password: MYSQL_PASSWORD,
        synchronize: false,
        entities: [
            "dist/**/**/**/*.entity{.ts,.js}",
            "dist/**/**/*.entity{.ts,.js}"
        ],
        migrations: [
            "dist/migrations/*{.ts,.js}"
        ],
        migrationsTableName: "optisan_migrations"
    }
}
let dataSource = new DataSource(TypeOrmDataSourceConfig());
export default dataSource;