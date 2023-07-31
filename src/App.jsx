import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Pokedex from './Pages/Pokedex'
import PokedexId from './pages/PokedexId'
import Page404 from './Pages/Page404'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pokedex' element={<Pokedex/>}/>
        <Route path='/pokedex/:id' element={<PokedexId/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
  )
}

export default App
