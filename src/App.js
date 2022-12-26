import React , {useEffect, useState} from 'react';
import './App.css';

// Mounting components
export const App = ( ) => {

  const [count , setcount] = useState(0)

  useEffect(() => {
    alert("Hello world!")
  },[])


  return(
    <div >
      Employee {count}
      <button onClick={() => setcount(count + 1)}>Submit</button>
    </div>
  )
}

export default App

