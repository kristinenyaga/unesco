import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
import logo from '../../assets/images/logo.png';
const Footer = () => {
const currentDate = new Date().getFullYear();
console.log(currentDate);
  return (
    <div className="bg-gray-200 w-full h-[30vh] mt-10 relative">
      <div className="max-w-[1300px] mx-auto">
        <div className='flex justify-between pt-12'>
          <div>
          <img src={logo} alt="logo" height={50} width={150} className='mt-10' />
        </div>
        <div className='flex justify-between w-1/2'>
          <div>
            <p className='text-[17px] text-gray-700 font-medium'>Explore</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700 '>Home</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>About</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>Search</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>Words</li>
            </ul>

          </div>
          <div>
            <p className='text-[17px] text-gray-700 font-medium'>Partners</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700 '>Adanian Labs</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>AiCE Africa</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>Adapt IT</li>
            </ul>

          </div>
          <div>
            <p className='text-[17px] text-gray-700 font-medium'>Legal</p>
            <ul className=''>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700 '>Cookie Policy</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>Privacy Policy</li>
              <li className='cursor-pointer text-[14px] font-normal leading-6 tracking-wide text-gray-700'>Terms and Conditions</li>
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