import { useState,useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Pacientes from "./components/Pacientes";

const App = ()=>{
  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  useEffect(() =>{
    const obtenerLS = ()=>{
    const pacientesLS =JSON.parse(localStorage.getItem('pacientes')) ?? []
    setPacientes(pacientesLS)
    }
    obtenerLS()
  },[])

  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])


  return (<div className="container">
    <Header />
    <div className=" mt-12 sm:flex">
    <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente = {setPaciente}
      
    />
    <Pacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente = {eliminarPaciente}
    />
    </div>
  </div>);
}


export default App;