import { useState } from 'react'
import FormUser from '../components/FormUser';
import UserList from '../components/UserList';
function App() {
  const [usuarios,setUsuarios] = useState([]);
  return (
    <>
    <div className='flex flex-col md:flex-row'>
      <div className='block  w-full md:w-1/2'>
        <FormUser agregarUsuario={[usuarios,setUsuarios]}/>
      </div>
      <div className='block w-full  md:w-1/2'>
        <UserList usuarios={usuarios}/>
      </div> 
    </div>
     
      
    </>
  )
}

export default App
