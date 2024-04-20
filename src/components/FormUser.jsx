import { useState } from "react";
import Alerta from "./Alerta";

const FormUser = ({agregarUsuario}) => {
  const [usuarios, setUsuarios] = agregarUsuario;
  const[nuevoUsuario, setNuevoUsuario] = useState({name:'', lastName:'', email:''}); 
  const [alerta, setAlerta] = useState({error:false, msg:''});

  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name,lastName,email} = nuevoUsuario;
    if([name,lastName,email].includes('')){
      setAlerta({
        error:true,
        msg:"Todos los campos son requeridos"
      });
      return;
    }
    const isDuplicate = usuarios.some(user => {
      return user.id === nuevoUsuario.email;
    });

    if(isDuplicate){
      setAlerta({
        error:true,
        msg:"El email ya ha sido registrado"
      });
      return;
    }
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({name:'', lastName:'', email:''});
    setAlerta({error:false, msg:''});
  }
  const {msg} = alerta;
  return (
    <>
    <form onSubmit={handleSubmit} className="bg-white py-10 px-5 mb-10 md:mb-0 shadow-md rounded-md">
    {msg&&(
      <Alerta alerta={alerta}/>
    )}
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