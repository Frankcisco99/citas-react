import React, {useEffect} from 'react'
import Pacient from './Pacient'
const Pacientes = ({pacientes,setPaciente, eliminarPaciente}) => {

  return (
    
    <div className='sm:w-1/2 h-screen sm:overflow-scroll'>
    {pacientes.length !==0 ? 
    <>
    <h2 className='sm:text-3xl text-base  mx-auto text-center '>Listado Pacientes</h2>
    <p className='text-center mt-5 font-bold'>Administra tus<span className='text-indigo-600'> pacientes y citas</span></p>
    {pacientes.map((paciente)=> <Pacient key = {paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>)}
    </>
    : 
    <>
    <h2 className='sm:text-3xl text-base  mx-auto text-center '>No hay pacientes</h2>
    <p className='text-center mt-5 font-bold'>Tus pacientes<span className='text-indigo-600'> apareceran aquí</span></p>
    </>
    }
    
    </div>
  )
}

export default Pacientes