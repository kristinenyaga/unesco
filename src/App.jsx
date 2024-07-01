import { useRef, useState } from 'react';
import './App.css';
import About from './components/about';
import Header from './components/header/header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import AvailableWords from './components/availableWords/AvailableWords';

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  const [responseData, setResponseData] = useState('')
  const [englishText, setEnglishText] = useState('');
  const [kiswahiliText, setKiswahiliText] = useState('');
  const inputRef = useRef(null);

  const separateLanguages = (description) => {
   console.log(description)
    const parts = description.split(/:\s*/);

    // Check if we have exactly two parts after splitting
    if (parts.length === 2) {
      setEnglishText(parts[0].trim());
      setKiswahiliText(parts[1].trim());
    }
    else if (parts.length === 1) {
      // If we only have one part, set it as the English text
      setEnglishText(description);
      setKiswahiliText('');
    }
    else {
      // If the text does not match the expected pattern
      setEnglishText('Could not separate the explanation. Please check the input format.');
      setKiswahiliText('');
    }
  };

  const postData = async (inputValue) => {
    const url = 'http://127.0.0.1:5000/find-information';
    const data = { query: inputValue };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      if (result.response[0]) {
        console.log(result.response[0]);
        setResponseData(result.response[0]);
        separateLanguages(responseData)
      }
      else {
        setResponseData('No translation found')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSearch = (name) => {
    postData(name);
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
        <Search selectedWord={selectedWord} handleSearch={handleSearch} englishText={englishText} kiswahiliText={kiswahiliText} />
        <Footer />
      </div>
    </main>
  );
}

export default App;
