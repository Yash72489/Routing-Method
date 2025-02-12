import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router'

const Home = () => {
   const navigate = useNavigate();

  function handleClick (){
   
  useEffect(
    setTimeout(() => navigate("/about"),3000)
  )
  }
  return (
  <h2>

    home 

    <button onClick={handleClick}>About Urself</button>
  </h2>
  )
}

export default Home