import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Auto } from '../vehiculos/classVehiculos/Autos'
import { Camioneta } from '../vehiculos/classVehiculos/Camioneta'
import { Vehiculo } from '../vehiculos/classVehiculos/Vehiculos'
import { VehiculosDto } from './vehiculos.dto';

@Injectable()
export class VehiculosService {
  private vehiculos: Vehiculo[] = [];

  constructor() {
    this.loadVehiculos();
  }

  private loadVehiculos() {
    try {
      const data = fs.readFileSync('src/vehiculos/vehiculos.txt', 'utf8' );
      const vehiculosJson = JSON.parse(data);
      vehiculosJson.forEach((vehiculoJson) => {
        if (vehiculoJson.tipo === 'camioneta') {
          const camioneta = new Camioneta(
            vehiculoJson.marca,
            vehiculoJson.patente,
            vehiculoJson.modelo,
            vehiculoJson.anio,
            vehiculoJson.precio,
            vehiculoJson.capacidadCarga
          );
          this.vehiculos.push(camioneta);
        } else {
          const auto = new Auto(
            vehiculoJson.marca,
            vehiculoJson.patente,
            vehiculoJson.modelo,
            vehiculoJson.anio,
            vehiculoJson.precio
          );
          this.vehiculos.push(auto);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  private saveVehiculos() {
    try {
      const vehiculosJson = JSON.stringify(this.vehiculos);
      fs.writeFileSync('src/vehiculos/vehiculos.txt' + '\r\n', vehiculosJson );
    } catch (err) {
      console.error(err);
    }
  }

  getVehiculos() {
    return this.vehiculos;
  }

  getAutos() {
    return this.vehiculos.filter((v) => v.tipo === 'auto');
  }

  getCamionetas() {
    return this.vehiculos.filter((v) => v.tipo === 'camioneta');
  }
 
  agregarVehiculo(vehiculoDto: VehiculosDto) {
    const nuevoVehiculo = vehiculoDto.capacidadCarga ? 
      new Camioneta(
        vehiculoDto.marca,
        vehiculoDto.patente,
        vehiculoDto.modelo,
        vehiculoDto.anio,
        vehiculoDto.precio,
        vehiculoDto.capacidadCarga
      ) :
      new Auto(
        vehiculoDto.marca,
        vehiculoDto.patente,
        vehiculoDto.modelo,
        vehiculoDto.anio,
        vehiculoDto.precio,
      );
    
    this.vehiculos = this.vehiculos.concat(nuevoVehiculo);
    this.saveVehiculos();
  }
  
}
