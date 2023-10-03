export abstract class Vehiculo {
  constructor(
    public marca: string,
    public patente: string,
    public modelo: string,
    public anio: number,
    public precio: number,
    public tipo: 'auto' | 'camioneta'
  ) {}
}