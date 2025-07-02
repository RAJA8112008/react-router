import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Labs = () => {
  const Navigate=useNavigate();
  function ClickHandler(){
    Navigate('/about');
  }
  return (
    <div>
    <div>
      This is labs page
    </div>
     <div>
      <button onClick={ClickHandler}>Move to About page</button>
    </div>
    </div>
  )
}

export default Labs
