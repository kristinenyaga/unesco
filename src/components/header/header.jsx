import ai from '../../assets/images/ai.png';
import './header.css';
const Header = () => (
  <div className="flex section__padding font-poppins h-[100vh]">
    <div className="flex flex-1 justify-center flex-col mr-10 pl-10">
      <h1 className="gradient__text text-white font-bold text-[62px] leading-[75px]">Explore the Possibilities of AI with Unesco</h1>
      <p className='text-dimWhite font-medium leading-6 mt-10 text-[20px]'>We are making AI accessible by translating key terminologies into Kiswahili. Our platform bridges the gap, bringing cutting-edge technology to Swahili-speaking communities.Making AI more accessible.</p>

      <div className="gpt3__header-content__input">
        <button type="button" className='w-1/4 bg-lightblue py-3'>Try Out</button>
      </div>


    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;