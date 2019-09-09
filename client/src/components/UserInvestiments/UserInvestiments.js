import React, { useState } from 'react';
import InvestimentTable from './InvestimentsTable';

const UserInvestiments = ({ fixedIncome, variableIncome, deleteInvestiment }) => {
  const [showFixed, setShowFixed] = useState(false);
  const [showVariable, setShowVariable] = useState(false);

  return (
    <section className="investiments">
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
          <InvestimentTable investimentInfo={fixedIncome} deleteInvestiment={deleteInvestiment} />
        }
      </div>
      <div className="invest-table">
        <div className="table-toggle variable-title" onClick={() => setShowVariable(!showVariable)}>
          <h2>Renda Variável:</h2>
          {
            showFixed ?
              <p>Clique para esconder!</p>
              :
              <p>Clique para mostrar!</p>
          }
        </div>
        {
          showVariable &&
          <InvestimentTable investimentInfo={variableIncome} deleteInvestiment={deleteInvestiment} />
        }
      </div>
    </section>
  )
}

export default UserInvestiments;