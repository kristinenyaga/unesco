import './App.css'
import About from './components/about';
import Hero from './components/hero';
import Input from './components/input';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary sm:px-16 px-6 flex justify-center items-center`}>
        <div className="xl:max-w-[1280px] w-full">
          <About />
          <Input />
        </div>
      </div>
    </div>
  );
  
}

export default App
