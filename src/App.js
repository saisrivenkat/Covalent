import './App.css';
import React from 'react';
import Form from './components/Form';
import View from './components/View';

function App() {
  const [address, setaddress] = React.useState();
  const [balance, setbalance] = React.useState();
  const [change, setchange] = React.useState(true);
  const [txn, settxn] = React.useState([]);
  const chainId = 42;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getTxn = async () => {
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/transactions_v2/?&key=${API_KEY}`;
    const txns = await fetch(url);
    const result = await txns.json();
    settxn(result.data.items)
    console.log(result);
  }
  const getbalance = async (e) => {
    e.preventDefault();
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?&key=${API_KEY}`
    const balance = await fetch(url);
    const result = await balance.json();
    setchange(false)
    setbalance(result.data.items[0].balance);
    console.log(result.data.items[0].balance);
    getTxn();
  }
  return (
    <div className="App">
      <Form address={address} setaddress={setaddress} getbalance={getbalance} />
      {change ? null : <View balance={balance} txn={txn} />}
    </div>
  );
}

export default App;
