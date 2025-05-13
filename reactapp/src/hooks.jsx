import React, { useRef, useState } from 'react'

const Hooks = () => {
    const inputref = useRef();
    const [name, setname] = useState("")
    console.log("component rendered")
  return (
    <div>
        <h1>hookds</h1>
        <input  ref={inputref} type="text"  placeholder='Enter your name' />
         <button onClick={()=> {
            inputref.current.focus();
            inputref.current.style.color = "red";
             setname("dfsdfdfj")
         }}>Explore</button>

    </div>

  )
}


export default Hooks