import User from './User';
const UserList = ({usuarios}) => {
    return (
        <>  
            {usuarios.length>0 &&
                usuarios.map(user=>(
                    <User key={user.email} user={user}/>
                ))
            }
        </>
    );
}

export default UserList