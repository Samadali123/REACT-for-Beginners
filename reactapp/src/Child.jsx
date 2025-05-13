import React, { useContext } from 'react'
import {NameContext} from './NameContext'


const Child = () => {
   
    const {name, setName}= useContext(NameContext)
  return (


    <div>
        <h1>hello</h1>
     {name}

     <button onClick={()=>{
           setName("arham ali")
     }}>chnage name</button>
         </div>
  )
}

export default Child