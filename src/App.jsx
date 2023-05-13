import './App.css';
import { useState } from 'react';


function App() {
  let users = [];

  //estado para tomar los datos del formulario, atravez de un objeto
  const [dataform, setDataForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errorMessage, seterrorMessage] = useState('');
  // Método para capturar todos los datos del formulario en el objeto dataform
  const handleChange = (e) => {
    e.preventDefault();
    setDataForm({ ...dataform, [e.target.name]: e.target.value });
  }

  const onSave = (e) => {
    e.preventDefault();
    if(dataform.name === ""|| dataform.email === "" || dataform.password ===""){
      seterrorMessage("Todos los campos son obligatorios");
    }else{
      seterrorMessage("");
      users.push(dataform);
      console.log(users);
    }
  }

  return (
    <div className="container">
      <h1>REGISTRO DE USUARIOS</h1>
      <span style={{ color: 'red' }}>{errorMessage}</span>
      <form onSubmit={onSave}>
        <label>Nombre</label>
        <input
          type="text"
          className='form-control'
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={dataform.name}
          onKeyDown={() => {
            if (/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(dataform.name)){
              seterrorMessage('')
            } else{
              seterrorMessage('el nombre solo puede contener letras y/o espacios')}
          }} />
        <label>Correo Electronico</label>
        <input
          type="text"
          className='form-control'
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={dataform.email} 
          onKeyDown={() => {
            if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(dataform.email)) {
              seterrorMessage('')
            } else {
              seterrorMessage('el correo es invalido')
            }
          }}/>
        <label>Contraseña</label>
        <input
          type="password"
          className='form-control'
          name="password"
          placeholder="Contraseña"
          onChange={handleChange}
          value={dataform.password} />
        <button className='btn btn-success'>Registrarse</button>
      </form>
    </div>
  );
}

export default App;
