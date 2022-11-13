import './App.sass';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;
