import './App.css'
import ReactAudioPlayer from 'react-audio-player'
import BlackEarth from './assets/Black Earth.mp3'
import NameLess2 from './assets/SemNome-2.mp3'
import Sodom from './assets/Sodom.mp3'
import LionsDen from './assets/lions den.mp3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'darkred' }}> Dominus Fatua - Metal Band</h1>
        <h3>Lista de Músicas: </h3>

        <h4>Black Earth</h4>
        <ReactAudioPlayer style={{ width: '40%' }} src={BlackEarth} controls />
        <h4>Sem Nome 2</h4>
        <ReactAudioPlayer style={{ width: '40%' }} src={NameLess2} controls />
        <br />
        <br />

        <h4>Covers</h4>
        <h4>Lions Den - Morbid Angel</h4>
        <ReactAudioPlayer style={{ width: '40%' }} src={LionsDen} controls />

        <h4>Sodom</h4>
        <ReactAudioPlayer style={{ width: '40%' }} src={Sodom} controls />
        <br />
        <br />
      </header>
    </div>
  )
}

export default App
