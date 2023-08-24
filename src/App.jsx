import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//, Route,Routes
function App() {
  return (
    <>
  <Router>

  <Navbar/>

<Routes>
<Route path="/" element={<Home />} />
</Routes>
  </Router>
    </>
  )
}

export default App
