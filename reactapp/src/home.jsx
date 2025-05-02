import React from 'react'
import Header from './header';

const Home = () => {
    const  name = "arham ali";
    const age = 20;
  return (
    <>
    <Header name={name} age={age} />
    </>
       
  )
}

export default Home