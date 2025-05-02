import React, { useState } from 'react'

const Events = () => {
    const [name, setname] = useState("Unknown")
    const [email, setemail] = useState("xyz@gmail.com");
    const [number, setnumber] = useState(9000)
  return (
 

    <div>
        Events in React

        <h1 onMouseMove={()=>{
              setname("Manchurian Uncle")
        }} onMouseLeave={()=>{
              setname("Syed Samad ALi")
        }} onMouseEnter={()=>{
              setname("arham ali")
        }}>Name :  {name}</h1>
        <input  onChange={(e)=>{
                console.log(e)
                setname(e.target.value)
        }} type="text"  placeholder='Enter your name'/>
            
            <button onClick={()=>{
                setname("Unknoe")
            }}>Default name</button>

            <button onClick={()=>{
                  document.querySelector("h1").innerHTML = "";
                  document.removeChild(input);
            }}>Logout</button>

            <form >
                      <input onChange={(e)=> {setname(e.target.value)}} type="text"  placeholder='Enter your name'/>
                      <input  onChange={(e)=> {setemail(e.target.value)}} type="email"  placeholder='Enter your email'/>
                      <input onChange={(e)=> {setnumber(e.target.value)}} type="number"  placeholder='Enter your number'/>
                      <button onClick={()=>{ console.log(name,email,number)}}>Submit</button>
            </form>
        </div>
  )
}

export default Events