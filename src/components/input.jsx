import { useState } from 'react';
import data from '../components/data/data.json'

const Input = () => {
  console.log(data);
  const [search, setSearch] = useState('');
  const [typedSummary, setTypedSummary] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm)

    const person = data.find((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    console.log(person);
    if (person) {
      console.log(person.description);
        const summaryWords = person.description.split(' ');

        // Create a typing effect with a delay
        let typedText = '';
        let index = 0;
        const interval = setInterval(() => {
          if (index < summaryWords.length) {
            typedText += ' ' + summaryWords[index];
            // setIsLoading(false)
            setTypedSummary(typedText);
            setWordIndex(index);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 100); 
    } 
  };

  return (
    <div className='flex  justify-center items-center flex-col mx-auto font-poppins'>
      <div className='w-[50vw]'>
        <input type='text' className='w-full p-3 rounded-lg border-2 border-grey' placeholder='Enter an AI Term'
        value={search}
        onChange={handleInputChange} /> 
      </div>
      <h1 className='text-white font-medium text-lg mt-5'>Result</h1>
      <div className='mt-5 h-[40vh] w-[50vw] bg-white rounded-lg' style={{ overflowY: 'auto' }}>
        {typedSummary}
      </div>
    </div>
  )
}

export default Input