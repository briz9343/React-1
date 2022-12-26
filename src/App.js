import React , {useEffect, useState} from 'react';
import './App.css';

// Updating components
export const App = ( ) => {

  const [count , setcount] = useState(0)

  useEffect(() => {
    alert(count)
  },[count])


  return(
    <div >
      Employee {count} <br />
      <button onClick={() => setcount(count + 1)}>Submit</button>
    </div>
  )
}

export default App

