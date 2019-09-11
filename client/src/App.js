import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.scss';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import UserInvestments from './components/UserInvestments/UserInvestments';
import PieChart from './components/PieChart/PieChart';

const App = () => {
  const [fixedIncome, setFixedIncome] = useState([]);
  const [variableIncome, setVariableIncome] = useState([]);

  const fetchInvestments = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/investments`)
      .then((response) => {
        setFixedIncome(response.data.filter((e) => e.type === 'fixa'))
        setVariableIncome(response.data.filter((e) => e.type === 'variavel'))
      })
      .catch((error) => console.log(error));
  }

  const deleteInvestment = (investimentID) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/investments/${investimentID}`)
      .then(() => fetchInvestments())
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchInvestments();
  }, [])

  return (
    <div className="App">
      <Header />
      <PieChart fixedIncome={fixedIncome} variableIncome={variableIncome} />
      <InvestmentForm fetchInvestments={fetchInvestments} />
      <UserInvestments fixedIncome={fixedIncome} variableIncome={variableIncome} deleteInvestment={deleteInvestment} />
    </div>
  );
}

export default App;
