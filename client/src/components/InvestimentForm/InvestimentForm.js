import React, { useState } from 'react';
import axios from 'axios';

const InvestimentForm = ({ fetchInvestiments }) => {
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/investiments`, { type, value, date })
      .then(() => {
        setType('');
        setValue('');
        setDate('');
        setErrorMessage(false);
        fetchInvestiments();
      })
      .catch((error) => {
        setErrorMessage(true)
        console.log(error);
      })
  }

  return (
    <section className="investiment-form">
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-title">
          <h4>Adicionar novo investimento:</h4>
        </div>
        <div className="form-inputs">
          <div className="inputs">
            <label htmlFor="type"><strong>Tipo:</strong> </label>
            <select name="type" value={type} onChange={(event) => setType(event.target.value)}>
              <option value="">Tipo de renda</option>
              <option value="fixa">Renda Fixa</option>
              <option value="variavel">Renda Variável</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="value"><strong>Valor:</strong> </label>
            <input name="value" type="number" value={value} onChange={(event) => setValue(event.target.value)} />
          </div>
          <div className="inputs">
            <label htmlFor="date"><strong>Data da Compra:</strong> </label>
            <input name="date" type="date" min="1700-01-01" max="3000-01-01" value={date} onChange={(event) => setDate(event.target.value)} />
          </div>
          <button type="submit">Adicionar</button>
        </div>
        {
          errorMessage && <span className="error">Todos os campos devem ser preenchidos!</span>
        }
      </form>
    </section>
  )
}

export default InvestimentForm;