import React, { useState } from 'react'


const Counter = () => {

    const [age,setage] = useState(20)
     const IncrementAge = ()=>{
           setage(age + 1)
     }

     const DecrementAge = ()=>{
        setage(age -1)
  }

     
   
  return (
<>
    <h1>Age is {age}</h1>
    <button onClick={()=> IncrementAge()} >Increment Age</button>
    <button  onClick={()=> DecrementAge()}>Decrement Age</button>
</>

  )
}

export default Counter