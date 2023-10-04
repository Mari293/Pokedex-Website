import Main from "./components/pages/Home/Home"
import PokeInfo from "./components/pages/PokeInfo/PokeInfo"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/pokemoninfo/:pokeid" element={<PokeInfo />}/>
      <Route path="/" element={<Main />}/>
    </Routes>
  )
}

export default App
