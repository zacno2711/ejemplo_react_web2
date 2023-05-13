import logo from './logo.svg';
import './App.css';

function App() {

  //estado para tomar los datos del formulario, atravez de un objeto
  const [dataform, setDataForm] = useState({ name: '', email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState(''); // Método para capturar todos los datos del formulario en el objeto dataform
  const handleChange = (e) => { e.preventDefault(); setDataForm({...dataform,[e.target.name]:e.target.value}); console.log(dataform) }
  return (
    <div className="container">
      <h1>REGISTRO DE USUARIOS</h1>
      <p style={{ color: 'red' }}>{errorMessage}</p>
      <form>
        <label>Nombre</label>
        <input
          type="text"
          className='form-control'
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={dataform.name} />
        <label>Correo Electronico</label>
        <input
          type="text"
          className='form-control'
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={dataform.email} />
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
