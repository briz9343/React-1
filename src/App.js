import React , {useEffect, useState} from 'react';
import './App.css';

// Unmounting components
export const App = ( ) => {

  const [count , setcount] = useState(0)

  useEffect(() => {
   return() => {
    alert('R U Sure U Want To Close This Tab')
   }
  },[])


  return(
    <div >
      Employee {count} <br />
      <button onClick={() => setcount(count + 1)}>Submit</button>
    </div>
  )
}

export default App

