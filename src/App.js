// import logo from './logo.svg';
import './App.css';
// import data from './data.json';
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

function App() {

  // Map And Reduce Method Use
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


  // Filter Method Use

  const myFilter = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  const salary = myFilter.filter((i) => i.salary >= 35000);

  const lowSalary = myFilter.filter((i) => i.salary < 35000);


  return (
    <div className="App">

      {/* Map And Reduce Method Use */}
      <table>
        <tbody>
          <tr>
           
            <th>Table No :1</th>
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
      <br/>
      <br/>
      <br/>

      {/* Map And Reduce Method Use */}
      <table>
        <tbody>
          <tr>
            <th>Table No :  2</th>

          </tr>  
          <tr>
            <td>35000 Or Above Person</td>
          </tr>        
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Bonus</th>
          </tr>
          {
            salary.map((i) => {
              return (
                <tr key={Math.random(i)}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>{i.bonus}</td>
                 
                </tr>
              )
            })
          }
          <tr>
            <td>Low Salary Person</td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Bonus</th>
          </tr>
          {
            lowSalary.map((i) => {
              return (
                <tr key={Math.random(i)}>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salary}</td>
                  <td>{i.bonus}</td>
                 
                </tr>
              )
            })
          }
          </tbody>
        </table>
    </div>
  )
}
export default App;
