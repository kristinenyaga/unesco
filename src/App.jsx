import React, { useRef, useState } from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header/header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import AvailableWords from './components/availableWords/AvailableWords';
import data from './components/data/data.json';

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [translation, setTranslation] = useState('');
  const inputRef = useRef(null);

  const handleSearch = (name) => {
    const translationItem = data.find((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (translationItem) {
      setTranslation(translationItem.description);
    } else {
      setTranslation('Translation not found');
    }
  };

  const handleWordClick = (name) => {
    setSelectedWord(name);
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
    handleSearch(name);
  };

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <AvailableWords handleWordClick={handleWordClick} />
        <Search selectedWord={selectedWord} handleSearch={handleSearch} translation={translation} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
