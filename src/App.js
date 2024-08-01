
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import ProductPage from "./Pages/ProductPage";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Cart from "./components/Cart";
import ProductsPage from "./Pages/ProductsPage";
function App() {
  return (
    <div className="App">
            <Router>
            <NavBar/>
            <NavMenu/>
            <Cart/>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products/:handle' element={<ProductPage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
