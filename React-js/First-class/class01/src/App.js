import Cart from './components/Cart';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
<div className='main-containerCart'>
<Cart title="Get your game on"/>
<Cart title="Gaming accessories"/>
<Cart title="Shop for your home essentials"/>
<Cart title="Get your game on"/>
<Cart title="Shop deals in Fashion"/>
<Cart title="Top categories in Kitchen"/>
<Cart title="New home arrivals under $50"/>
<Cart title="Get your game on"/>
</div>

{/* <Contact/> */}
         </div>
  );
}

export default App;
