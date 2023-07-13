import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import ProductPage from './ProductPage';
import MainPage from './MainPage';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div>
    <Login/>
    <Router>
      <Routes>
      <Route path="/MainPage" element ={<MainPage/>}/>
      <Route path="/" element ={<ProductPage/>}/>
      <Route path="/ProductDetails" element ={<ProductDetails/>}/>
    
      
    </Routes>
     </Router>
     </div>
  );
}

export default App;

