import React, { useState } from 'react';
import InvestmentTable from './InvestmentsTable';

const UserInvestments = ({ fixedIncome, variableIncome, deleteInvestment }) => {
  const [showFixed, setShowFixed] = useState(false);
  const [showVariable, setShowVariable] = useState(false);

  return (
    <section className="investments">
      <div className="invest-table">
        <div className="table-toggle fixed-title" onClick={() => setShowFixed(!showFixed)}>
          <h2>Renda Fixa:</h2>
          {
            showFixed ?
              <p>Clique para esconder!</p>
              :
              <p>Clique para mostrar!</p>
          }
        </div>
        {
          showFixed &&
          <InvestmentTable investmentInfo={fixedIncome} deleteInvestment={deleteInvestment} />
        }
      </div>
      <div className="invest-table">
        <div className="table-toggle variable-title" onClick={() => setShowVariable(!showVariable)}>
          <h2>Renda Variável:</h2>
          {
            showVariable ?
              <p>Clique para esconder!</p>
              :
              <p>Clique para mostrar!</p>
          }
        </div>
        {
          showVariable &&
          <InvestmentTable investmentInfo={variableIncome} deleteInvestment={deleteInvestment} />
        }
      </div>
    </section>
  )
}

export default UserInvestments;