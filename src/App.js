import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onchange = (valor) => {
    setLinea1(valor.target.value)
  }
  const onchange2 = (valor) => {
    setLinea2(valor.target.value)
  }

  const onchangeImage = (valor) => {
    setImage(valor.target.value)
  }


  return (
    <div className="App">
        <select onChange={onchangeImage}>
          <option value="baby">Baby</option>
          <option value="dog">Dog</option>
          <option value="tea">Tea</option>
          <option value="tellme">Tell Me</option>
          <option value="why">Why?</option>
          <option value="you">You!</option>
        </select>
        <br />
        <input type="text" onChange={onchange}/> <br />
        <input type="text" onChange={onchange2}/> <br />
        <button>Export</button>

        <div>
          <span>{linea1}</span><br />
          <span>{linea2}</span> <br />
          <img src={"/img/" + image + ".jpg"}></img>
        </div>
    </div>
  );
}

export default App;
