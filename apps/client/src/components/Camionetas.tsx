import { useEffect, useState } from 'react'


export default function Autos(){
    const [camionetas, setCamionetas] = useState <IVehiculo[]>([])
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/vehiculos/camionetas');
        const data = await response.json();
        setCamionetas(data);
      }
      fetchData();
    }, []);

interface IVehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  patente: number;
  capacidadCarga:number;
  tipo: string;
}

  return (
    <div>
      <h2>Camionetas</h2> 
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Patente</th>
            <th>Capacidad de carga</th>
          </tr>
        </thead>
        <tbody>
          {camionetas.map((camioneta) => (
            <tr key={camioneta.marca}>
              <td>{camioneta.marca}</td>
              <td>{camioneta.modelo}</td>
              <td>{camioneta.anio}</td>
              <td>{camioneta.patente}</td>
              <td>{camioneta.capacidadCarga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
 }