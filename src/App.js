import './App.sass';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router basename={'/Virtualbank'}>
      <Navbar/>

      <Routes>
        <Route exact path="/Virtualbank" element={<Home/>} />
        <Route exact path="/Virtualbank/Signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;
