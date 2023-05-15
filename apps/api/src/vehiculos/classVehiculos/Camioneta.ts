import { Vehiculo } from '../classVehiculos/Vehiculos';

export class Camioneta extends Vehiculo {
  constructor(
    marca: string,
    patente: string,
    modelo: string,
    anio: number,
    precio: number,
    public capacidadCarga: number
  ) {
    super(marca, patente, modelo, anio, precio, 'camioneta');
  }
}