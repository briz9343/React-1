
import { useState } from 'react';
import './App.css';

const data = [
  {
    id: 101,
    name: 'Abacavir',
    quantity: 25,
    price: 150,
    expiry: 2022,
    status: true
  },
  {
    id: 102,
    name: 'Eltrombopag',
    quantity: 90,
    price: 550,
    expiry: 2021,
    status: true
  },
  {
    id: 103,
    name: 'Meloxicam',
    quantity: 85,
    price: 450,
    expiry: 2025,
    status: false
  }
]

function App() {
  const [string , setString] = useState(data);

  const onClickHandler = () => {

    const filter = string.filter((i) => i.id !== 103);
    setString(filter);
  }

  return (
    <div>
    {
      string.map((i) =>  {
        return (
          <div>
            user name is {i.name} <br/>
            user id is {i.id}
          </div>
        )
      })
    }
      <button onClick={onClickHandler}>Add</button>
    </div>
  )
  
  }
export default App;
