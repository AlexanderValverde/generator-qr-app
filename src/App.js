import { useState } from 'react';
import './App.css';
import { GeneratorQR } from './components/GeneratorQR';
import { InputUrl } from './components/InputUrl';
import { Options } from './components/Options';
import { Title } from './components/Title';

function App() {

  const [url, setUrl] = useState('');
  const [color, setColor] = useState('#000000');
  const [validate, setValidate] = useState(false);

  function getUrl(urlinput) {
    if (urlinput.length > 0) {
      setUrl(urlinput);
      setValidate(true);
    }else{
      setValidate(false);
    }
  }

  function getColor(colorinput) {
    setColor(colorinput);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='main-container'>
          <Title />
          <InputUrl getUrl={getUrl} validate={validate} />
          <Options getColor={getColor} />
          <GeneratorQR urlGenerate={url} color={color} validate={validate} />
        </div>
      </div>
    </div>
  )
} 

export default App;
