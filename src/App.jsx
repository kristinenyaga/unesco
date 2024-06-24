import './App.css'
import About from './components/about';
import Header from './components/header/header';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import AvailableWords from './components/availableWords/AvailableWords';
function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Search />
        <AvailableWords />
        <Footer />
      </div>

    </main>
  );
  
}

export default App
