import './App.css';
import { useState } from 'react';


function App() {
  // state hooks to hold store a manage variable data
  const [addAmount, setAmount] = useState("0.00")
  const [userData, setUserData] = useState({ totalMoney: 1000.0 });

  // function to add amount that user input to total money amount
  const addDeposit = () => {
    const amountToAdd = parseFloat(addAmount); // string to float conversion
    setUserData({ userData, totalMoney: userData.totalMoney + amountToAdd });
  }

  // changes input field to user's input
  const change = event => {
    setAmount(event.target.value)
  }

  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div className='addingSection'>
        Quick account deposit
        <br />
        <label>
          Dollar amount $:
          <input
            onChange={change}
            value={addAmount}
            type='number'
            defaultValue={"0.00"} />
        </label>

        <div>
          <button onClick={addDeposit}>
            Add
          </button>
        </div>

        <div>
          Total money: {userData.totalMoney.toFixed(2)}
        </div>

      </div>
    </div>
  );
}

export default App;
