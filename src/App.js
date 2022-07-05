import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {Home, Login, ProductDetail, Purchases, Favorites} from './pages';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productdetail/:id' element={<ProductDetail/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
