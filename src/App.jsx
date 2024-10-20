
import './App.css'
import Autentificar from './components/Autenticador'
import Saudacao02 from './components/Bemvindo'
import Botao from './components/Botao'
import Desconto from './components/Desconto'
import VerificadorAluno from './components/Escola'
import User from './components/EstadoUser'
import Idade from './components/Idade'
import Nivel from './components/Nivel'
import VerificadorNotas from './components/Notas'
import Saudacao from './components/Saudacao'

function App() {


  return (
    <>
      <Saudacao/>
      <Saudacao02 ola=" Desenvolvedor"/>
      <Autentificar/>
      <Idade idade="18" />
      <VerificadorAluno ra="012345" />
      <VerificadorNotas notas="99"/>
      <Desconto desconto={true} />
      <Desconto desconto={false} /><br/>
      <User online={true}/>
      <User online={false}/><br/>
      <Nivel nivel="iniciante" />
      <Nivel nivel="intermediário" />
      <Nivel nivel="avançado" />
      <Nivel nivel="desconhecido" /><br/>
      <Botao login={true} />
      <Botao login={false} />

      
    </>
  )
}

export default App
