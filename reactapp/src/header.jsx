import React from 'react'

const Header = (data) => {
  return (
    <div>
           { data.name === "arham ali"  ?   <h1  onMouseLeave={()=> alert("bye")} onMouseEnter={()=> alert("welcome")}>welcome to  {data.name}</h1> : <h1>nikal jao yahah seee jldi se {data.name}</h1>}
         <h3>{data.age}</h3>
         <button onClick={()=> alert("logout successfully")}>Logout</button>

    </div>
  )
}


export default Header


