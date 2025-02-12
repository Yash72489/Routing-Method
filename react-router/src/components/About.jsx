import React from 'react'
import { useNavigate } from 'react-router';

const About = () => {


  const navigate = useNavigate();
   function handleClick (){
  navigate("/dashboard")
  }
  return (
    <>
      <div>About page</div>

      <button onClick={handleClick}>Adsa Urself</button>
    </>
  );
}

export default About;