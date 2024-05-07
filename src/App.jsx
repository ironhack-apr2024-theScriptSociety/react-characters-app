import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import './App.css'
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';

function App() {

  return (
    <>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>

    </>
  )
}

export default App
