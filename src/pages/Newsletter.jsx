import backgroundImage from "../assets/background.png";

const Newsletter = () => {

  return (
    <div
      className="max-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full pt-8 flex justify-center text-[40px]">
        <p className="">Stay in the loop!</p>
      </div>
      <div className="w-full flex justify-center text-[10px] sm:text-[20px]">
        <div className="w-[80%] flex justify-center">
          <p className="">
            Stay updated on tech, events, and exclusive perks from GDG
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center text-[10px] sm:text-[20px]">
        <div className="w-[80%] flex justify-center">
          <p className="">
            —delivered to your inbox!
          </p>
        </div>
      </div>
      <div className="pt-[2rem] pb-[4rem] sm:pt-[2rem] sm:pb-[5rem] flex justify-center">
        <div className="md:w-[50%] lg:w-[40%] sm:w-[50%] w-[60%] flex sm:flex-col lg:flex-row flex-col gap-1">
          <div className="md:basis-2/3 sm:w-full w-full">
            <input
              className="border-2 w-full border-gray-400 rounded-lg px-4 py-2 text-sm"
              type="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="md:basis-1/3 flex justify-center items-center">
            <button
              type="button"
              className="px-4 py-2 rounded-lg font-semibold hover:cursor-pointer hover:scale-105 transform ease-in-out duration-150 bg-black text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
