
import { useEffect, useState } from 'react'


export default function Autos(){
    const [autos, setAutos] = useState <IVehiculo[]>([])
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/vehiculos/autos');
        const data = await response.json();
        setAutos(data);
      }
      fetchData();
    }, []);

interface IVehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  patente: number;
  tipo: string;
}

  return (
    <div>
      <h2>Autos</h2> 
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Patente</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => (
            <tr key={auto.marca}>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.anio}</td>
              <td>{auto.patente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
 }
