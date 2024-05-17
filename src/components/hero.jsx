import image from '../assets/images/ai_image.svg'
const Hero = () => {
  return (
 <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 bg-grey">
          <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}>
            AI Platform
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[80px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Harnessing <br className="sm:block hidden" />{" "}
            <span className="text-gradient">The Power</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          OF AI.
        </h1>
        <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          By Translating AI Terminologies to kiswahili
        </p>
        <button className='bg-lightblue w-1/4 mt-5 py-3 px-2 rounded-lg'>
          Try Out
        </button>
      </div>

      <div className={`flex-1 flex  md:my-0 my-10 relative`}>
        <img src={image} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

    </section>
  )
}

export default Hero