
import {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api'

function App() {

  const [input, setInput] = useState('') 

//useState para armazenar o retorno da chamada
  const [cep, setCep] = useState({});

  //assincrona, depende de uma requisição q pode demorar um pouco
  async function handleSearch(){
    //alert("Valor input:  " + input)
    if(input === ''){
      alert("Preencha com algum cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
      //console.log(response.data)

    } catch {
      alert("errorrrrr")
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

  
{// renderização condicional para o usestate do cep, como vem vazio no inicio main não aparece no primeiro load da tela
Object.keys(cep).length > 0 && (
      <main className="main" >
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.logradouro}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>

    </main>
)}


    </div>
  );
}

export default App;
