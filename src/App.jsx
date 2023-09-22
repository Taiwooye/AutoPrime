import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Car from './components/Pages/Car';
import Contact from './components/Pages/Contact';


//, Route,Routes
function App() {
  return (
    <>
  <Router>

  <Navbar/>

<Routes>
<Route path="/" element={<Home />} />

<Route path="/about-us" element={<About/>} />
<Route path="/cars" element={<Car/>} />
<Route path="/contacts" element={<Contact/>} />

</Routes>

<Footer />

  </Router>
    </>
  )
}

export default App
