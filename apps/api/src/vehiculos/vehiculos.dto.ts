import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

// DTO >> Data Transfer Object

export class VehiculosDto {

    @MinLength(3)
    @IsString()
    readonly marca:string

    @IsString()
    @MinLength(3)
    readonly patente:string

    @MinLength(3)
    @IsString()
    public modelo: string

    @IsNumber()
    public anio: number

    @IsNumber()
    public precio: number

    @IsNumber()
    @IsOptional()
    capacidadCarga?: number;

    tipo: 'auto' | 'camioneta';
}