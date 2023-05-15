import { Body, Controller, Get, Param, Post, Query, BadRequestException } from '@nestjs/common';
import { Vehiculo } from './classVehiculos/Vehiculos';
import { VehiculosService } from '../vehiculos/vehiculos.service';
import { VehiculosDto } from './vehiculos.dto';

@Controller('vehiculos')
export class VehiculosController {
  constructor(private readonly vehiculosService: VehiculosService) {}

  @Get()
  getVehiculos(): Vehiculo[] {
    return this.vehiculosService.getVehiculos();
  }

  @Get('/autos')
  getAutos(): Vehiculo[] {
    return this.vehiculosService.getAutos();
  }

  @Get('/camionetas')
  getCamionetas(): Vehiculo[] {
    return this.vehiculosService.getCamionetas();
  }

  @Post()
  postVehiculo(@Body()vehiculosDto: VehiculosDto) {
  return this.vehiculosService.agregarVehiculo(vehiculosDto);
}


}