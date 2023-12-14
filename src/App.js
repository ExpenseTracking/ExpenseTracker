import logo from './logo.svg';
import './App.css';

const userData = {
  totalMoney: 1000.0
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h3>Helloooo asdf hey</h3>
        </a>


        Enter an amount to deposit to your account:
        <br />
        <label>
          Dollar amount: <input name="addAmount" />
        </label>

      </header>
    </div>
  );
}

export default App;
