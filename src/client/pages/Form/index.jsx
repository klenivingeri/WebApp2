import React, { useState } from 'react';
import Container from '../../organisms/container';
const inititalFormState = {
  name: '',
  number: ''
}

const Form = () => {
  const [form, setForm] = useState(inititalFormState)
  const setInput = (newValue) => {
    setForm(form => ({ ...form, ...newValue }))
  }
  const send = () =>{
    console.log(form)
  }
  return (<Container>
    <form>
      <div>
        <input
        name="name"
        onChange={e => setInput({name:e.target.value})}
        label="Name"
        placeholder="Name"
        />
        <span className="text-danger"></span>
      </div>
      <div>
        <input
        name="number"
        onChange={e => setInput({number:e.target.value})}
        label="Number"
        placeholder="(99)99999-9999"
        />
        <span className="text-danger"></span>
      </div>
      <div>
        <button type="button" onClick={()=>send()}>Enviar pedido</button>
        <span></span>
      </div>
    </form>
  </Container>);
}
export default Form;