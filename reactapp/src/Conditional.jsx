import React from 'react'

const Conditional = (props) => {
  return (

    <div>
           <h1>{props.name === "arham ali" ? <h1>welcome to {props.name}</h1> : <h1>nikal jao yahah seee jldi se {props.name}</h1>}</h1>
    </div>
  )
}

export default Conditional