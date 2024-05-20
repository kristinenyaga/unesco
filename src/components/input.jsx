import { useState } from 'react';
import data from '../components/data/data.json'
import { BsSearch } from "react-icons/bs";

const Input = () => {
  console.log(data);
  const [search, setSearch] = useState('');
  const [typedSummary, setTypedSummary] = useState('');
  const [wordIndex, setWordIndex] = useState(0);

  const handleInputChange = (e) => {
    setTypedSummary('');  
    const searchTerm = e.target.value;
    setSearch(searchTerm)
  };

  const handleSearch = () => { 
    const translation = data.find((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    if (translation) {
      console.log(translation.description);
        const summaryWords = translation.description.split(' ');

        // Create a typing effect with a delay
        let typedText = '';
        let index = 0;
        const interval = setInterval(() => {
          if (index < summaryWords.length) {
            typedText += ' ' + summaryWords[index];
            setTypedSummary(typedText);
            setWordIndex(index);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 100); 
    } 

  }
  return (
    <div className='flex  justify-center items-center flex-col mx-auto font-poppins h-[100vh]'>
      <div className='w-[50vw] relative'>
        <input type='text' className='w-full p-3 rounded-lg border-2 border-grey outline-none' placeholder='Enter an AI Term'
        value={search}
          onChange={handleInputChange}  /> 
        <button className='text-white absolute right-1 top-1 bg-primary w-10 h-10 flex justify-center items-center rounded-full' onClick={handleSearch}><BsSearch className='text-[20px]' /></button>
      </div>
      <h1 className='text-white font-medium text-[20px] mt-5'>Result</h1>
      <div className='mt-5 h-[40vh] w-[50vw] bg-white rounded-lg font-poppins p-4 capitalize' style={{ overflowY: 'auto' }}>
        {typedSummary}
      </div>
    </div>
  )
}

export default Input