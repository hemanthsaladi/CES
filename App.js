
import './App.css';
import Navb from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mp from './mp';
import About from './about';
import CarouselFadeExample from './img';
 import Tex from './tex';
import Professors from './professors';
import Home from './home';
import { BrowserRouter, Route,Routes,useNavigate } from 'react-router-dom'
import Team from './team';
import Contact from './contact';
function App() {
  return (

    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path="/professors" element={<Professors/>}/>
      
       <Route path="/team" element={<Team/>}/>
       <Route path="/contact" element={<Contact/>}/>
    </Routes>
 </BrowserRouter>

  );
}

export default App;
