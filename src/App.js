import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

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

  const exportButton = (valor) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();    
    });
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
        <button onClick={exportButton}>Export</button>

        <div className='meme' id='meme'>
          <span>{linea1}</span><br />
          <span>{linea2}</span> <br />
          <img src={"/img/" + image + ".jpg"}></img>
        </div>
    </div>
  );
}

export default App;
