
import HomePage from "./Pages/HomePage";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import ProductPage from "./Pages/ProductPage";
function App() {
  return (
    <div className="App">
            <Router>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products/:handle' element={<ProductPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
