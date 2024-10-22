import { BrowserRouter, Route,Routes} from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import Contact from './components/Contact/Contact';


function App() {
  const [cart,setCart]=useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
            {/* <Route path='/contact'element={<Contact/>} />   */} 
          </Routes>
        </div>
        <Contact />
      </BrowserRouter>
    </>
  )
}

export default App