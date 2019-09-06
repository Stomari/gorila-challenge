import React from 'react';

const UserInvestiments = ({ fixedIncome, variableIncome, deleteInvestiment }) => {
  return (
    <section className="investiments">
      <div>
        <h2>Renda Fixa:</h2>
        <table>
          <thead>
            <tr>
              <th>Data da compra</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
          {
            fixedIncome && fixedIncome.map((element) => {
              return (
                <tr key={element._id}>
                  <td>{element.date}</td>
                  <td>{element.value}</td>
                  <td><button onClick={() => deleteInvestiment(element._id)}>Delete</button></td>
                </tr>
                )
            })
          }
          </tbody>

        </table>
      </div>
      <div>
        <h2>Renda Variável:</h2>
        <table>
          <thead>
            <tr>
              <th>Data da compra</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
          {
            variableIncome && variableIncome.map((element) => {
              return (
              <tr key={element._id}>
                <td>{element.date}</td>
                <td>{element.value}</td>
                <td><button onClick={() => deleteInvestiment(element._id)}>Delete</button></td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UserInvestiments;