import { Module } from '@nestjs/common';
import { VehiculosController } from './vehiculos.controller';
import { VehiculosService } from './vehiculos.service';

@Module({
  controllers: [VehiculosController],
  providers: [VehiculosService]
})
export class VehiclesModule {}
