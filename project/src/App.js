import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Scanqr from './pages/Scanqr';
import Displayuser from './components/Displayuser';
import Adminpage from './pages/Adminpage';
import Admindataenterpage from './pages/Admindataenterpage';
import Testadmin from './pages/Testadmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Aboutus" element={<Aboutus/>}/>
          <Route exact path="/Displayuser" element={<Displayuser/>}/>
          <Route exact path="/Scanqr" element={<Scanqr/>}/>
          <Route exact path="/Adminpage" element={<Adminpage/>}/>
          <Route exact path="/Admindataenterpage" element={<Admindataenterpage/>}/>
          <Route exact path="/Testadmin" element={<Testadmin/>}/>

          Testadmin
          <Route path="*" element={<Contact/>}/>
      </Routes>

    </Router>
    
    

  );
}

export default App;
