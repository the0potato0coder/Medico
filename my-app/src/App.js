import Home from './pages/Homepage/Home';
import Test from './pages/page2/Test';
import About from './pages/About/About';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
    <Navbar/>
    <BrowserRouter>
    <Routes>
        <Route path='/Test' element={<Test/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
