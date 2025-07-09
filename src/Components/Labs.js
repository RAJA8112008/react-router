import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Labs = () => {
  const Navigate=useNavigate();
  function ClickHandler(){
    Navigate('/about');
  }
  function backHandler(){
    Navigate(-1);
  }
  return (


    
    <div>
    <div>
      This is labs page
    </div>
     <div>
      <button onClick={ClickHandler}>Move to About page</button>
      <button onClick={backHandler}>Go back</button>
      
    </div>
    </div>
  )
}

export default Labs
