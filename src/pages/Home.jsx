// import React, { useEffect, useState } from 'react'

// export default function Home() {
  
    
//   return (
//     <div>
//       <h1>User Management App</h1>
//       <p>Welcome </p>

//     </div>
//   )
// }


import React, { useEffect, useState } from 'react'

export default function Home() {
    const[search,setSearch] = useState("")
    const[users,setUsers]= useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .tehn(respose=>respose.json())
        .ten(data=>{
            console.log(data);
            setUsers(data);
            
        });
    },[]);
    
  return (
  
    <div>
        <h1>User Management App</h1>
        <input type="text" placeholder='Search ' value={search} onChange={(e)=> setSearch(e.target.value)} />

        <table border="2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
  
}
