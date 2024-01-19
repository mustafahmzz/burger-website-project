import './styles/App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {

  return (
    <div className='App'>
    <Navbar/>
<Routes>
  <Route path='/' exact element={<Home/>}/>
  <Route path='/About' exact element={<About/>}/>
  <Route path='/Contact' exact element={<Contact/>}/>
  <Route path='/Menu' exact element={<Menu/>}/>
</Routes>
    <Footer/>
    </div>
  )
}

export default App
