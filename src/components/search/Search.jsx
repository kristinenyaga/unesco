import { set } from 'date-fns';
import { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ selectedWord, handleSearch, translation }) => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('')
  const inputRef = useRef(null);

  useEffect(() => {
    if (selectedWord) {
      setInputValue(selectedWord);
      if (inputRef.current) {
        // inputRef.current.focus();
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedWord]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
      setResponse(result.response[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
    postData(inputValue);
    
  };

  return (
    <div className='mt-24 max-w-[1300px] mx-auto' id='search'>
      <p className='mb-5 text-sm font-bold tracking-wide text-center text-gray-500'>
        Word explanation</p>
      <p className='text-center text-[28px] mb-7 text-black max-w-[500px] mx-auto'>Enter a word to get its explanation in <span className='text-blue-200 font-medium'>Kiswahili and English</span></p>
      <form className="mb-5 relative" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={inputValue}
            // ref={inputRef}
            placeholder="enter a word..."
            className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-blue-900 placeholder:text-white-light rounded-full h-12 w-full placeholder:tracking-wider placeholder:text-sm placeholder:text-yellow ltr:pr-11 rtl:pl-11 text-gray-200 text-md pl-5"
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-primary absolute right-0 ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-10 h-10 p-0 flex items-center justify-center bg-yellow mr-1">
            <BsSearch className='text-[22px] font-bold text-blue-950' />
          </button>
        </div>
      </form>
      <div className='mt-10 flex justify-between px-10'>
        <div ref={inputRef}>
          <p className='tracking-wide text-blue-800 font-medium text-center mb-3'><span className='font-semibold text-lg'>Kiswahili</span> Explanation</p>
          <div className='bg-gray-100 text-gray-700 border border-gray-300 overflow-y-hidden w-[500px] h-[400px] rounded-md'>
            {/* Kiswahili translation can go here */}
              {translation && (
              <div className='p-4 tracking-wide leading-7 h-[100%] overflow-y-auto scrollcontainer'>{translation.kiswahili}</div>
            )}
          </div>
        </div>
        {/* <div className='w-0.5 rounded-md bg-yellow' /> */}
        <div>
          <p className='tracking-wide text-blue-800 font-medium text-center mb-3'><span className='font-semibold text-lg'>English</span> Explanation</p>
          <div className='bg-gray-100 text-gray-700 border border-gray-300 overflow-y-hidden w-[500px] h-[400px] rounded-md'>
            {translation && (
              <div className='p-4 tracking-wide leading-7 h-[100%] overflow-y-auto scrollcontainer'>{translation.english}</div>
            )}
          </div>
        </div>
        <div>
          <p className='tracking-wide text-blue-800 font-medium text-center mb-3'><span className='font-semibold text-lg'>English</span> Explanation</p>
          <div className='bg-gray-100 text-gray-700 border border-gray-300 overflow-y-hidden w-[500px] h-[400px] rounded-md'>
            {response && (
              <div className='p-4 tracking-wide leading-7 h-[100%] overflow-y-auto scrollcontainer'>{response}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
