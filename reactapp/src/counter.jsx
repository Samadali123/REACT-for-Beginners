import React, { useContext, useState } from 'react'
import { NameContext } from './NameContext'


const Counter = () => {

  const {name, setName} = useContext(NameContext)

    const [age,setage] = useState(20)
     const IncrementAge = ()=>{
           setage(age + 1)
     }

     const DecrementAge = ()=>{
        setage(age -1)
  }

     
   
  return (
<>
       {name}
       <button onClick={()=> {
        setName("dsdfjsdfjsd")
       }}>chnage name</button>
    <h1>Age is {age}</h1>
    <button onClick={()=> IncrementAge()} >Increment Age</button>
    <button  onClick={()=> DecrementAge()}>Decrement Age</button>
</>

  )
}

export default Counter