
import './App.css';
import Navb from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mp from './mp';
import About from './about';
import CarouselFadeExample from './img';
 import Tex from './tex';

function Home() {
  return (
  <div>
  <Navb/>
  
    <Mp/>
    <Tex/>
    <CarouselFadeExample/>
    
    <About/>

</div>
  );
}

export default Home;
