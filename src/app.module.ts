import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionModule } from './institution/institution.module';
import { StaffModule } from './staff/staff.module';
import { EmployeeModule } from './employee/employee.module';
import { CredentialModule } from './credential/credential.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService:ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: +ConfigService.get('DB_PORT'),
        // username: ConfigService.get('DB_USERNAME'),
        username: "postgres",
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        entities: [join(process.cwd(), "dist/**/*.entity.js")],
        synchronize: true
      })
    }),
    StaffModule,
    InstitutionModule,
    EmployeeModule,
    CredentialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
