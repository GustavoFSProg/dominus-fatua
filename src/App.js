import './App.css'
import BlackEarth from './assets/Black Earth.mp3'
import NameLess2 from './assets/SemNome-2.mp3'
import Sodom from './assets/Sodom.mp3'
import LionsDen from './assets/lions den.mp3'
import AudioPlayer from 'material-ui-audio-player'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <h1 style={{ color: 'darkred' }}> Dominus Fatua - Metal Band</h1>
        <h3>Lista de Músicas: </h3>

        <h4>Black Earth</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={BlackEarth}
        />
        <br />
        <h4>Nameless 2</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={NameLess2}
        />
        <br />
        <br />
        <br />

        <h4>Covers</h4>
        <h4>Lions Den - Morbid Angel</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={LionsDen}
        />
        <br />
        <h4>Sodom</h4>

        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={Sodom}
        />
        <br />
        <br />
      </header>
    </div>
  )
}

export default App
