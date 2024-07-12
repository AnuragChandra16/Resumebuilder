import React from 'react'
import './Inputcontrol.css'
const Inputcontrol = ({label,...props}) => {
    console.log(props);
  return (
    <div className='container2'>
        {label && <label>{label}</label>}
        <input  type="text" {...props}></input>
    </div>
  );
}

export default Inputcontrol;