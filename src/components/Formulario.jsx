import React, {useState,useEffect} from 'react'
import { Error } from './Error';
const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=>{
      if(Object.keys(paciente).length >0){
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
      }}
    ,[paciente])

    const generateId = ()=>{
      const fecha = Math.random().toString(36).substring(2)
      const random = Date.now().toString(36)
      return fecha + random
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if([nombre,propietario,email,fecha,sintomas].includes('')){
          setError(true)
        }
        else{
          setError(false)
          const datosPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
          }
          if(paciente.id){
            datosPacientes.id = paciente.id

            const datosActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? datosPacientes: pacienteState)
            setPacientes(datosActualizados)
            setPaciente({})
          }
          else{
            datosPacientes.id = generateId()
            setPacientes([...pacientes,datosPacientes])
          }
          
          setNombre('')
          setPropietario('')
          setEmail('')
          setFecha('')
          setSintomas('')
          
        }
    }
  return (
    <div className='sm:w-1/2'>
    <h1 className="sm:text-3xl text-base  mx-auto text-center">Seguimiento Pacientes</h1>
    <p className='text-center mt-5 font-bold'>Añade pacientes y <span className='text-indigo-600'> administralos</span></p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white py-10 px-5 mx-5 mt-5 mb-5 rounded-lg">
      <div className='mb-5'>
      {error && <Error><p>Todos los campos deben ser rellenados</p></Error>}

      <label className='font-bold' htmlFor='mascota'>Nombre Mascota</label>
      <input 
        id='mascota'
        type="text"
        placeholder='Nombre Mascota'
        className="block border-2 w-full rounded-md mt-2 placeholder-gray-400 "
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      </div>
      <div className='mb-5'>
      <label className='font-bold' htmlFor='dueño'>Nombre Propietario</label>
      <input 
        id='dueño'
        type="text"
        placeholder='Nombre Propietario'
        className="block border-2 w-full rounded-md mt-2 placeholder-gray-400 "
        value={propietario}
        onChange={(e) => setPropietario(e.target.value)}
      />
      </div>

      <div className='mb-5'>
      <label className='font-bold' htmlFor='mail'>Email</label>
      <input 
        id='mail'
        type="email"
        placeholder='Email'
        className="block border-2 w-full rounded-md mt-2 placeholder-gray-400 "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

      <div className='mb-5'>
      <label className='font-bold' htmlFor='ingreso'>Fecha Ingreso</label>
      <input 
        id='ingreso'
        type="date"
        className="block border-2 w-full rounded-md mt-2 placeholder-gray-400 "
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      </div>

      <div className='mb-5'>
      <label  className='font-bold' htmlFor='sintomas'>Sintomas</label>
      <textarea
      id='sintomas'  
      className='block border-2 w-full p-2 mt-2 rounded-md'
      placeholder='Describa sintomas'
      value={sintomas}
      onChange={(e) => setSintomas(e.target.value)}
      />
      </div>
    <input 
      type='submit'
      value={paciente.id? 'Editar Paciente' : 'Agregar Paciente'}
      className='w-full h-10 bg-indigo-600 rounded-md text-white font-bold hover:bg-indigo-900 cursor-pointer'
    />
    </form>
    </div>
  )
}

export default Formulario