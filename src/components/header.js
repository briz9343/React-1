import React from 'react'
import About from './about'

const header = (props) => {
    
    console.log("EmployeeData++ ",props);
  return (
    <div>
      
      <h1>Header Components</h1>
      Employee Id Is {props.EmployeeData.id}
      {
        props.EmployeeData.map((i) => {
            return (
              <div>
                {i.name} <br/>
                {i.expiry}
              </div>
            )
        })
      }
      <br />  
      <About />
    </div>
  )
}

export default header
