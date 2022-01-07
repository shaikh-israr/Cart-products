import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Carts from './screen/Carts';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Carts />} />
    </Routes>
  );
}

export default App;
