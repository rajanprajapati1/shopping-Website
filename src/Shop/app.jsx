import Cart from './page/Cart';
import Home from './page/Home';
import Login from './page/Login';
import Product from './page/Product';
import ProductList from './page/ProductList';
import Register from './page/Register';
import Error from './page/Error';
// import Pay from './page/Pay';
// import Success from './page/Success';
import { BrowserRouter, Route, Routes,Navigate  } from 'react-router-dom';

const App = () => {
  const user = true;
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>   
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={   <ProductList />}/>
         <Route path="/product/:id" element={   <Product />}/>
         <Route path="/cart" element={   <Cart />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;