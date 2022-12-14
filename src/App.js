import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

function App() {

  const myFunc = [
    {
      name: "Mobile",
      ProductId: 1,
      price: 20000
    },
    {
      name: "Laptop",
      ProductId: 2,
      price: 50000
    },
    {
      name: "tv",
      ProductId: 3,
      price: 30000
    }
  ];

  // let sum = 0;
 
  // for (const i of myFunc) {
  //    sum = sum + i.price;
  // }
  // console.log(sum);

  // const totalPrice = myFunc.reduce((acc , currentPrice) => {
  //   return acc + currentPrice.price;
  // },0)
  // console.log(totalPrice);

  let [a,b,c,d] = [1,2,3,4,5];
  console.log(d); 

  let {name,price,id} = {
      name : "tv",
      price : 50000,
      id : 1
  }
  
  console.log(tv);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload on react-lite-1.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <table>
        <tbody>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {
            // data.map((i) => {
            //   return (
            //     <tr key={Math.random(i)}>
            //       <td>{i.id}</td>
            //       <td>{i.title}</td>
            //       <td>{i.description}</td>
            //       <td>{i.price}</td>
            //     </tr>
            //   )
            // })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
