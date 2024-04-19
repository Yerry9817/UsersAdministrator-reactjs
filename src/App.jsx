import { useState } from 'react'
import FormUser from './FormUser';
import UserList from './UserList';
function App() {
  const [usuarios,setUsuarios] = useState([]);
  return (
    <>
    <div className='flex flex-col md:flex-row'></div>
    <div className='block w-full md:w-1/2'>
      <FormUser agregarUsuario={[usuarios,setUsuarios]}/>
    </div>
    <div className='block w-full md:w-1/2'>
      {usuarios.length &&(
        <UserList usuarios={usuarios}/>
      )}
    </div>  
      
    </>
  )
}

export default App
