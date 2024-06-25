import { BsBookmarkFill} from 'react-icons/bs';
import about_image from '../../src/assets/images/about_image.png';
const About = () => {
  return (
    <section className={`h-[60vh] bg-gray-100  sm:py-16 py-6 font-poppins  mt-40`} id='about'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex justify-between'>
          <img src={about_image} alt='about_image' className=' ' />
        <div className='max-w-[500px]'>
            <p className='text-[34px] font-light text-blue-950 flex gap-3'> <div className='w-1 h-20 bg-yellow rotate-90 mt-2'></div>Why Choose <span className='font-semibold text-blue-200'>Unesco ?</span></p>
            <div>
              <div className='flex items-center gap-2'>
                <BsBookmarkFill className='bg-blue-950 w-14 h-10 text-yellow text-lg p-3 rounded-full' />
                <div>
                  <p className='text-[14px] font-semibold'>Expert Contributors</p>
                  <p className='text-[14px] font-thin leading-7 tracking-wide text-gray-700'>Our content is curated by AI experts and linguists to ensure accuracy and relevance in translations.</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <BsBookmarkFill className='bg-blue-950 w-14 h-10 text-yellow text-lg p-3 rounded-full' />
                <div>
                  <p className='text-[14px] font-semibold  mt-6'>Comprehensive <span className='text-yellow font-bold'>AI</span> Terminologies</p>
                  <p className='text-[14px] font-thin leading-7 tracking-wide text-gray-700'>We provide comprehensive translations of AI terminologies in both Kiswahili and English, breaking down barriers and fostering understanding. </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <BsBookmarkFill className='bg-blue-950 w-14 h-10 text-yellow text-lg p-3 rounded-full' />
                <div>
                  <p className='text-[14px] font-semibold  mt-6'>User-Friendly Interface</p>
                  <p className='text-[14px] font-thin leading-7 tracking-wide text-gray-700'>Our platform is designed with user experience in mind, making it easy to find and understand AI terms.</p>
                </div>
              </div>
            </div>
        </div>

        </div>

      </div>
    </section>
  )
}

export default About