import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Features from './components/features/features';
import Testimonial from './components/testimonial/testimonial';
import Faq from './components/faq/faq';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Features />
      <Testimonial />
      <Faq />
      <Banner />
      <Footer/> 
    </div>
  );
}

export default App;
