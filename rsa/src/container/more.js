import React, {useState} from 'react';
import './../styles/More.css'

const More = (props) => {
  if(!props.show)
  { 
      return (null);
  }
  return (
    <div className="more">
       <div>Sync Now</div>
       <div>Delete</div>      
    </div>
  );
  
}

export default More;