import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Footer from './Componets/Footer';
import About from './Componets/About';
import Rooms from './Componets/Rooms';
import Menu from './Componets/Menu';
import Booknow from './Componets/Booknow';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Rooms' element={<Rooms/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Booknow' element={<Booknow/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
