import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import InvestimentForm from './components/InvestimentForm/InvestimentForm';
import UserInvestiments from './components/UserInvestiments/UserInvestiments';

const App = () => {
  const [fixedIncome, setFixedIncome] = useState(null);
  const [variableIncome, setVariableIncome] = useState(null);

  const fetchInvestiments = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/investiments`)
      .then((response) => {
        setFixedIncome(response.data.filter((e) => e.type === 'fixa'))
        setVariableIncome(response.data.filter((e) => e.type === 'variavel'))
      })
      .catch((error) => console.log(error));
  }

  const deleteInvestiment = (investimentID) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/investiments/${investimentID}`)
      .then(() => fetchInvestiments())
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchInvestiments();
  }, [])

  return (
    <div className="App">
      <InvestimentForm fetchInvestiments={fetchInvestiments} />
      <UserInvestiments fixedIncome={fixedIncome} variableIncome={variableIncome} deleteInvestiment={deleteInvestiment} />
    </div>
  );
}

export default App;
