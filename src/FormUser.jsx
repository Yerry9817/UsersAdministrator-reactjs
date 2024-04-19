import { useState } from "react";

const FormUser = ({agregarUsuario}) => {
  const [usuarios, setUsuarios] = agregarUsuario;
  const[nuevoUsuario, setNuevoUsuario] = useState({name:'',lastName:'',email:''}); 
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name,lastName,email} = nuevoUsuario;
    if([name,lastName,email].includes('')){
      return;
    }
    setUsuarios([...usuarios, nuevoUsuario]);
  }
  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white py-10 px-5 mb-10 md:mb-0 shadow-md rounded-md">
      <div className="mb-5">
        <label className="uppercase font-bold text-gray-700">Name</label>
        <input className="rounded-md w-full p-2 mt-2 placeholder-gray-400 border" type="text" name="name" value={nuevoUsuario.name}
          onChange={(e)=>{setNuevoUsuario({...nuevoUsuario, [e.target.name]:e.target.value})}}
        />
      </div>
      <div className="mb-5">
        <label className="uppercase font-bold text-gray-700">LastName</label>
        <input className="rounded-md w-full p-2 mt-2 placeholder-gray-400 border" type="text"  value={nuevoUsuario.lastName} name="lastName"
          onChange={(e)=>{setNuevoUsuario({...nuevoUsuario, [e.target.name]:e.target.value})}}
        />
      </div>
      <div className="mb-5">
        <label className="uppercase font-bold text-gray-700">Email</label>
        <input className="rounded-md w-full p-2 mt-2 placeholder-gray-400 border" type="text" value={nuevoUsuario.email} name="email"
          onChange={(e)=>{setNuevoUsuario({...nuevoUsuario, [e.target.name]:e.target.value})}}
        />
      </div>
      <div className="mb-5">
        <input className="w-full bg-blue-600 p-5 rounded-md text-white hover:bg-blue-800" type="submit" value={"Guardar"}/>
      </div>
    </form>
    </>
  )
}

export default FormUser