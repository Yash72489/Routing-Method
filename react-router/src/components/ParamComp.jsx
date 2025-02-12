import React from 'react'
import { useParams } from 'react-router'

const ParamComp = () => {
    const{id}= useParams();
  return (
    <div>Paramm : {id}</div>
  )
}

export default ParamComp