import { RxAccessibility } from "react-icons/rx";

const About = () => {
  return (
    <section className={`flex md:flex-row flex-col sm:py-16 py-6 font-poppins`}>
      <div className='text-white flex gap-10  justify-center mt-10 w-full'>
        <div>
          <p className='text-center mb-5 text-[30px] font-bold'>Engage with AI in your own Language</p>
          
          <p className="max-w-lg">This initiative promotes inclusive growth, empowering individuals to participate in and benefit from the advancements in AI technology.</p>
        </div>
        <div className='flex justify-center gap-10 font-poppins'>
          <div>
            <div className='bg-[#020F20] max-w-md h-1/2 p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>Ask anything</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
            <div className='bg-[#020F20] max-w-md h-1/2 p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>Fast Response</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
          </div>
          <div>
            <div className='bg-[#020F20] max-w-md h-1/2 p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>User Friendly</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
            <div className='bg-[#020F20] max-w-md h-1/2 p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>Simple</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
          </div>
      </div>
    </div>
      

    </section>
  )
}

export default About