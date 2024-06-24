import './header.css';
import hero_image from '../../assets/images/hero_image.png';
import line from '../../assets/images/line.png';
const Header = () => {
  // const handleScroll = () => { 
  //   window.scrollTo({ top:800, behavior: 'smooth' });
  // }
  return ( 
    <div className='text-black flex max-w-[1300px] mt-40 font-poppins m-auto' id='home'>
      <div className='flex w-screen justify-between'>
        <div className='flex flex-col gap-8 max-w-[520px] mt-10'>
          <p className='text-[14px] bg-gray-200 p-3 w-28 text-center rounded-md text-blue-200'>AI Platform</p>
          <p className=' text-[48px] font-semibold leading-[1.4] relative z-20'>Master AI Concepts <span>Seamlessly <div className='absolute top-[7.5rem] z-10 '><img src={line} /></div> </span> in <span className='text-blue-200'>Kiswahili and English</span> </p>
          <p className='font-thin leading-[2] text-[16px] text-gray-500'>Explore the world of artificial intelligence like never before. Our platform provides comprehensive translations of AI terminologies in both Kiswahili and English, breaking down barriers and fostering understanding. </p>
          <div>
            <button className="bg-gradient-to-r from-blue-950 to-blue-500 text-white py-2 px-14 rounded-lg">
              Try out
            </button>

          </div>
        </div>
        <div>
          <img src={hero_image} alt='hero_image' className=' ' />
        </div>
      </div>

    </div>
  )

};

export default Header;