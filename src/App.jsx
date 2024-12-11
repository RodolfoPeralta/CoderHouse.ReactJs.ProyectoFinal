import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import Footer from './components/footer';
import Nosotros from './components/Nosotros';

import './app.css';

function App() {

  const name = "Juan";

  return (
    <div className='appContainer'>
      <Header/>
      <NavBar />
      <ItemListContainer name={name}/>
      <Nosotros />
      <Footer />
    </div>
  )
}

export default App
