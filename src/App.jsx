import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import LogForm from './components/LogForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import { useUser } from './context/UserContext';


function App() {

  const { user } = useUser();

  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoría" element={<ItemListContainer name={user?.name} />} />
          <Route path="/categoría/:categoriaId" element={<ItemListContainer name={user?.name} />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Error 404: Página no encontrada</h2>} />
          <Route path="/login" element={<LogForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
