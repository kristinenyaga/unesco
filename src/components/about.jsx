import { RxAccessibility } from "react-icons/rx";

const About = () => {
  return (
    <section className={`flex md:flex-row flex-col sm:py-16 py-6 font-poppins`}>
      <div className='text-white mt-10 w-full'>
        <p className='text-center mb-5 text-[40px] text-light'>Benefits of using the AI Translator.</p>
        <div className='flex justify-between font-poppins'>
          <div>
            <div className='bg-grey max-w-lg p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>Accessibility</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
            <div className='bg-grey max-w-lg p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>Fast</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
          </div>
          <div>
            <div className='bg-grey max-w-lg p-5 rounded-lg mb-5'>
              <div className="flex gap-3 items-center">
                <div className='bg-darkgrey p-2 rounded-full'>
                  <RxAccessibility className='text-lightblue font-bold text-3xl' />
                </div>
                <p className='text-[20px] text-white font-medium '>User Friendly</p>

              </div>
              <p className='text-dimWhite mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
            <div className='bg-grey max-w-lg p-5 rounded-lg mb-5'>
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