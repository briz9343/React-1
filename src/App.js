// import logo from './logo.svg';
import './App.css';
// import data from './data.json';
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

function App() {

  const myFunc = [
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
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  const totalPrice = myFunc.reduce((acc , currentPrice) => {
    return acc + currentPrice.price;
  },0)

  const totalQuantity = myFunc.reduce((acc , currentquantity) => {
    return acc + currentquantity.quantity;
  },0)

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>Table No :1</td>
          </tr>          
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expiry</th>
          </tr>
          {
            myFunc.map((i) => {
              return (
                <tr key={Math.random(i)}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.expiry}</td>
                 
                </tr>
              )
            })
          }
          <tr>
          <th>Total Price Is :- </th>
          <th colSpan={4}>{totalPrice}</th>
          </tr>
          <th>Total Quantity Is :- </th>
          <th colSpan={4}>{totalQuantity}</th>
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
