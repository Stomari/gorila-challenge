import React, { useState } from 'react';
import axios from 'axios';

const InvestimentForm = () => {
  const [type, setType] = useState('fixa');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/investiments`, { type, value, date })
      .then(() => {
        setType('fixa');
        setValue('');
        setDate('');
        setErrorMessage(false);
      })
      .catch((error) => {
        setErrorMessage(true)
        console.log(error);
      })
  }

  return (
    <section className="investiment-form">
      <form onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="type">Tipo</label>
        <select name="type" value={type} onChange={(event) => setType(event.target.value)}>
          <option value="fixa">Renda Fixa</option>
          <option value="variavel">Renda Variável</option>
        </select>
        <label htmlFor="value">Valor</label>
        <input name="value" type="number" value={value} onChange={(event) => setValue(event.target.value)} />
        <label htmlFor="date">Data da Compra</label>
        <input name="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      {
        errorMessage && <span>Todos os campos devem ser preenchidos!</span>
      }
    </section>
  )
}

export default InvestimentForm;