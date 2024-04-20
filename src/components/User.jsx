const User = ({user}) => {
    const {email, lastName, name} = user;
  return (
    <>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase text-indigo-600">Nombre: {''}
                <span className="font-normal normal-case text-black">{name}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600">Apellido: {''}
                <span className="font-normal normal-case text-black">{lastName}</span>
            </p>
            <p className="font-bold uppercase text-indigo-600">Email: {''}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
        </div>
    </>
  )
}

export default User