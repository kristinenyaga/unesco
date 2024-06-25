import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-[4rem] w-screen flex justify-center z-50 items-center fixed top-0 p-2 mx-auto bg-gray-200">
      <div className='flex justify-between items-center w-3/4 py-5'>
        <img src={logo} className='mt-2' alt="logo" />
        <div>
          <ul className='flex gap-10 font-regular'>
            <li
              className='cursor-pointer hover:border-b-2 hover:border-blue-200'
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li
              className='cursor-pointer hover:border-b-2 hover:border-blue-200'
              onClick={() => scrollToSection('about')}
            >
              About
            </li>
            <li
              className='cursor-pointer hover:border-b-2 hover:border-blue-200'
              onClick={() => scrollToSection('search')}
            >
              Search
            </li>
            <li
              className='cursor-pointer hover:border-b-2 hover:border-blue-200'
              onClick={() => scrollToSection('words')}
            >
              Words
            </li>
            <li
              className='cursor-pointer hover:border-b-2 hover:border-blue-200'
              onClick={() => scrollToSection('footer')}
            >
              Footer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
