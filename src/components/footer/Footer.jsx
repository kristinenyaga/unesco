import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
const Footer = () => {
const currentDate = new Date().getFullYear();
console.log(currentDate);
  return (
    <div className="bg-blue-900 text-gray-200 w-full h-[30vh] mt-20 relative" id="footer">
      <div className="max-w-[1300px] mx-auto">
        <div className='flex justify-between px-28 pt-12'>
          <div>
          <p className='font-bold text-[25px] mt-5 w-20 h-20 border border-gray-500 rounded-full flex justify-center items-center'>Unesco</p>
        </div>
        <div className='flex justify-between w-1/2'>
          <div>
            <p className='text-[17px] text-gray-300 font-medium'>Explore</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400 '>Home</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>About</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>Search</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>Words</li>
            </ul>

          </div>
          <div>
            <p className='text-[17px] text-gray-300 font-medium'>Partners</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400 '>Adanian Labs</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>AiCE Africa</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>Adapt IT</li>
            </ul>

          </div>
          <div>
            <p className='text-[17px] text-gray-300 font-medium'>Legal</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400 '>Cookie Policy</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>Privacy Policy</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-400'>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='absolute bottom-12 flex items-center gap-5'>
            <p>Connect with us:</p>
            <div className='flex gap-2'>
              <BsFacebook />
              <BsTwitterX />
              <BsInstagram />
            </div>
          </div>
          <p className='absolute bottom-2 text-xs'>
            &copy; {currentDate} AICE. All rights reserved.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Footer