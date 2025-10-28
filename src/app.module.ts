import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from 'dotenv';
import {join} from 'path';
import getTypeOrmConfig from './config/typeorm.config';
import {ArticleModule} from './modules/article/infrastructure/article.module';
import {CategoryModule} from './modules/category/infrastructure/category.module';
import {EmployeeModule} from './modules/employee/infrastructure/employee.module';
import {UserModule} from './modules/user/user.module';

config();
config({
  path: join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});
@Module({
  imports: [
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    EmployeeModule,
    CategoryModule,
    UserModule,
    ArticleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
