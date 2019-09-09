import React from 'react';

const InvestimentsTable = ({ investimentInfo, deleteInvestiment }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Data da compra</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {
          investimentInfo && investimentInfo.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element.date}</td>
                <td>{element.value}</td>
                <td><img className="delete" onClick={() => deleteInvestiment(element._id)} src="./images/trash.png" alt="Trash Icon" /></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default InvestimentsTable;