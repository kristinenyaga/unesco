import data from '../../components/data/data.json';

const AvailableWords = ({ handleWordClick }) => {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <section className={`h-[55vh] sm:py-16 py-2 font-poppins bg-blue-900 rounded-md mt-20 mx-auto relative`} id="words">
      <p className="text-yellow text-center text-[30px] font-[100] tracking-wide">Available Words</p>
      <p className="text-gray-300 text-center text-[20px] font-[100] tracking-wide">Select a word from the list below to get the explanation </p>
      <div className="mt-5 flex justify-between max-w-[1300px] mx-auto px-24 lg:px-0">
        <div className="w-[40%] h-[300px] overflow-y-auto bg-gray-200 p-2 rounded-md">
          {firstHalf.map((word, index) => (
            <p
              key={index}
              className="border-b border-gray-300 text-[14px] text-gray-700 p-2 mb-2 cursor-pointer hover:text-gray-700 hover:text-[15px] hover:border"
              onClick={() => handleWordClick(word.name)}
            >
              {word.name}
            </p>
          ))}
        </div>
        <div className="w-[40%] h-[300px] overflow-y-auto bg-gray-200 p-2 rounded-md">
          {secondHalf.map((word, index) => (
            <p
              key={index}
              className="border-b border-gray-300 p-2 text-[14px] text-gray-700 mb-2 cursor-pointer hover:text-gray-700 hover:text-[15px] hover:border"
              onClick={() => handleWordClick(word.name)}
            >
              {word.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableWords;
