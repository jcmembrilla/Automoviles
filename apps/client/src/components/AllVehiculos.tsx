import { useEffect, useState } from 'react'

interface IVehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  patente: number;
  capacidadCarga: number;
  tipo:string
}

function AllVehiculos() {
  const [vehiculos, setVehiculos] = useState <IVehiculo[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/vehiculos');
      const data = await response.json();
      setVehiculos(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Vehículos disponibles</h2> 
      <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Patente</th>
          <th>Capacidad de carga</th>
        </tr>
      </thead>
      <tbody>
        {vehiculos.map((vehiculo) => (
          <tr key={vehiculo.patente}>
            <td> {vehiculo.tipo} </td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.modelo}</td>
            <td>{vehiculo.anio}</td>
            <td>{vehiculo.patente}</td>
            <td>{vehiculo.capacidadCarga}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default AllVehiculos