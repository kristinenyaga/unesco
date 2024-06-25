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

  const splitDescription = (description) => { 
    const translationKeyword = "Translation:"
    const index = description.indexOf(translationKeyword);
    console.log(index)
      if (index === -1) {
    return { english: description, kiswahili: null };
  }

  const english = description.slice(0, index).trim();
  const kiswahili = description.slice(index + translationKeyword.length).trim();

    console.log("english", english)
    console.log("kiswahili", kiswahili)
    return { english, kiswahili };
  }

  const handleSearch = (name) => {
    const translationItem = data.find((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    if (translationItem) {
      const data = splitDescription(translationItem.description);
      setTranslation(data);

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
