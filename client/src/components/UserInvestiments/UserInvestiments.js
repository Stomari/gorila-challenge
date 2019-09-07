import React from 'react';
import InvestimentTable from './InvestimentsTable';

const UserInvestiments = ({ fixedIncome, variableIncome, deleteInvestiment }) => {
  return (
    <section className="investiments">
      <div>
        <h2>Renda Fixa:</h2>
        <InvestimentTable investimentInfo={fixedIncome} deleteInvestiment={deleteInvestiment} />
      </div>
      <div>
        <h2>Renda Variável:</h2>
        <InvestimentTable investimentInfo={variableIncome} deleteInvestiment={deleteInvestiment} />
      </div>
    </section>
  )
}

export default UserInvestiments;