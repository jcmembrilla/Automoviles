import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { AppController } from "./app.controller";

import { AppService } from "./app.service";

import { VehiclesModule } from './vehiculos/vehiculos.module';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from "./vehiculos/vehiculos.service";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "client", "dist"),
    }),
    VehiclesModule,
  ],
  controllers: [AppController, VehiculosController],
  providers: [AppService, VehiculosService],
})
export class AppModule {}
