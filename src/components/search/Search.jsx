import { BsSearch } from 'react-icons/bs'
import { useState } from 'react';
const Search = () => {
   const [response, setResponse] = useState(null);
    const handleFindInformation = async () => {
    try {
      const res = await fetch('http://localhost:5000/find-information', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify('algorithm' ),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
    };
  handleFindInformation();
  console.log(response)
  return (
    <div className=' mt-32 max-w-[1300px] mx-auto '>
      <p className='mb-5 text-base font-medium tracking-wide text-center text-gradient-to-t from-yellow to-blue-900 text-yellow text-gradient'>
        Word Translation</p>
      <p className='text-center text-[28px] mb-7 text-gray-700 max-w-[500px] mx-auto'>Enter a word to get its translation in <span className=''>Kiswahili and English</span></p>
      <form className="mb-5 relative">
            <div>
              <input
                type="text"
                // value={search}
                placeholder="enter a word..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-blue-950 placeholder:text-white-light rounded-full h-12 w-full placeholder:tracking-wider placeholder:text-sm placeholder:text-yellow ltr:pr-11 rtl:pl-11 text-gray-200 text-md pl-5"
                // onChange={handleInputChange}
              />
              <button type="button" className="btn btn-primary absolute right-0 ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-10 h-10 p-0 flex items-center justify-center bg-yellow mr-1">
            <BsSearch className='text-[22px] font-bold text-blue-950' />
              </button>
            </div>
      </form>
      <div className='mt-10 flex justify-between px-10'>
        <div>
          <p className='tracking-wide text-blue-800 font-medium text-center mb-3'> <span className='font-semibold text-lg'>Kiswahili</span> Translation</p>
          <div className=' bg-gray-200 overflow-y-hidden w-[500px] h-[400px] rounded-md'>
          </div>
        </div>
        <div className='w-0.5 rounded-md bg-gray-300'>

        </div>
        <div>
          <p className=' tracking-wide text-blue-800 font-medium text-center mb-3'><span className='font-semibold text-lg'>English</span> Translation</p>
          <div className=' bg-gray-200 overflow-y-hidden w-[500px] h-[400px] rounded-md'>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search