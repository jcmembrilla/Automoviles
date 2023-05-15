import { Vehiculo } from '../classVehiculos/Vehiculos';

export class Auto extends Vehiculo {
  constructor(
    marca: string,
    patente: string,
    modelo: string,
    anio: number,
    precio: number
  ) {
    super(marca, patente, modelo, anio, precio, 'auto');
  }
}