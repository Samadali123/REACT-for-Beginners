import React, { useEffect } from 'react'

const Test = () => {


    const [user, setuser] = useState([])

   useEffect( async () => {
     try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          console.log(response);
     } catch (error) {
          console.error(error);
     }
   
     return () => { 
        console.log("clean up")
     }
   }, [user])
   

   const UpdateUser = ()=>{
    const users = [
        {username : "samad", age : 22, profession : "Engineer"},
        {username : "samad", age : 22, profession : "Engineer"},
        {username : "samad", age : 22, profession : "Engineer"},
        {username : "samad", age : 22, profession : "Engineer"},
    ]
        setuser(users)
   }
  return (
    <div>Test</div>
  )
}

export default Test