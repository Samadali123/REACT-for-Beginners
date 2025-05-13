import React, { useState } from 'react'
import Parent2 from './Parent2'

const Parent = (props) => {
    // const [name, setname] = useState("syed samad ali")

  return (
    <>
        <Parent2  name = {props.name}/>
    </>
  )
}

export default Parent


