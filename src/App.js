import logo from './logo.svg';
import './App.css';
import data from './data.json';

function App() {

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
            data.map((i) => {
              return (
                <tr key={Math.random(i)}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.description}</td>
                  <td>{i.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
