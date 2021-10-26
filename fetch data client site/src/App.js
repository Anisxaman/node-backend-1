import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';





function App() {

   const [users, setusers] = useState([]);

   const nameref = useRef();
   const emailref = useRef();


useEffect(() => {
  fetch("http://localhost:4000/users")
  .then(res=>res.json())
  .then(data=>{
    setusers(data)
    console.log(data)
  }
 

  )
  
}, [])





// -------------------------input & send data in server handle---------------



const handleAddUser=(e)=>{

  e.preventDefault();//reload off korar jonno

  
  console.log(nameref.current.value);
  console.log(emailref.current.value);


  const email=emailref.current.value;
  const name=nameref.current.value;
//----send data to the server-->

//----------------------- post r jonno second parameter patate hobe-------------

const newUser={
  name:name,   //variale name & value same nm hoile just name likhe dile hoia jai
  email:email

}


//------------------------------ post korar jonno-------------------------
fetch("http://localhost:4000/users",{
  method:"post",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify(newUser)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  const addedUser=data;
  const newUsers=[...users,addedUser];
  setusers(newUsers)
})


nameref.current.value="";
emailref.current.value="";
}





  return (
    <div className="App">
      <h2>Found Users:{users.length}</h2>

      <form action="" onSubmit={handleAddUser}>
        <input type="text" ref={nameref} placeholder="name" />
        <input type="email" ref={emailref} placeholder="email" />
       <input type="submit" value="submit" />
      </form>














      <ul>
      {

      users.map(user=><li key={user.id}>
         {user.username}
         {user.email}
       
        
        </li>)
      }

      </ul>
     




     
    </div>
  );
}

export default App;
