import React from 'react'

const Pacient = ({paciente,setPaciente,eliminarPaciente}) => {
  const {nombre,propietario,email,fecha,sintomas, id} = paciente
  return (
    <div className='bg-white py-10 px-5 mx-5 mt-5 mb-5 rounded-lg'>
      <p className='font-bold'>Nombre:<span className='font-normal'> {nombre}</span></p>
      <p className='font-bold'>Propietario:<span className='font-normal'> {propietario}</span></p>
      <p className='font-bold'>Email:<span className='font-normal'> {email}</span></p>
      <p className='font-bold'>Ingreso:<span className='font-normal'> {fecha}</span></p>
      <p className='font-bold'>Sintomas:<span className='font-normal'> {sintomas}</span></p>
      <div className='flex justify-between mt-5'>
        <button
        className='bg-indigo-600 sm:px-10 sm:py-2 px-5 py-1 text-white font-bold uppercase rounded-lg hover:bg-indigo-700'
        onClick={()=> setPaciente(paciente)}
        >Editar</button>
        <button
        className='bg-red-500 sm:px-10 sm:py-2 px-5 py-1 text-white font-bold uppercase rounded-lg hover:bg-red-700'
        onClick={()=> eliminarPaciente(id)}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Pacient