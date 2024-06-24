import logo from '../../assets/images/logo.png';
const Navbar = () => {
  return (
    <div className="h-[4rem] w-screen flex justify-center z-50 items-center fixed top-0 p-2 mx-auto bg-gray-200">

        <div className='flex justify-between items-center w-3/4 py-5 '>
          <img src={logo} className='mt-2' />
          <div>
            <ul className='flex gap-10 font-regular'>
              <li className='cursor-pointer hover:border-b-2 hover:border-blue-200 '>Home</li>
              <li className='cursor-pointer hover:border-b-2 hover:border-blue-200'>About</li>
              <li className='cursor-pointer hover:border-b-2 hover:border-blue-200'>Search</li>
              <li className='cursor-pointer hover:border-b-2 hover:border-blue-200'>Words</li>
              <li className='cursor-pointer hover:border-b-2 hover:border-blue-200'>Footer</li>
            </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar