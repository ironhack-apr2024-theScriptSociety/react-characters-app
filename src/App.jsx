import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-details" element={<p>Display character details</p>} />
        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>

    </>
  )
}

export default App
