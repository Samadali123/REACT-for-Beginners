import { useState } from "react"
import React from 'react'

const ControlledComponent = () => {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


  return (
     <>
     
      <h1>two way Binding  : <span>Controlled Component</span>

      <form action="#"  onSubmit={(e)=> {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(password);
      }}>

           <label htmlFor="name"> name</label>
           <input onChange={(e)=> {setName(e.target.value)}} type="text"  placeholder='name' value={name} />
            <p>Name : {name}</p>
           <label htmlFor="email">email</label>
           <input  onChange={(e)=> {setemail(e.target.value)}} type="email"  placeholder='email'  value={email}/>
            <p>email : {email}</p>
           <label htmlFor="password">password</label>
           <input  onChange={(e)=> {setpassword(e.target.value)}} type="password"  placeholder='password'   value={password}/>
           <p>password : {password}</p>
           <input type="submit"   value="Submit" />
      </form>
      </h1>
     </>
  )
}

export default ControlledComponent