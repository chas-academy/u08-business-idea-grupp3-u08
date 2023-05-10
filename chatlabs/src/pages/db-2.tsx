
function DashBoard2() {
  return (
    <>

      <section className="flex justify-center bg-neutral-950">
        <div className="w-full h-full md:max-w-2xl">
          <section className="my-20 flex flex-row md:flex-row justify-center">
            <div className="flex flex-col justify-center mr-32">
              <h1 className="text-slate-100 text-6xl font-light uppercase ">
                <span className="text-violet-500">Dash</span>Board
              </h1>
            </div>
          </section>
        </div>
      </section>

      <div className="relative w-full">
        <svg
          className="w-full inset-0 absolute z-10 -translate-y-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0a0a0a"
            fill-opacity="1"
            d="M0,128L1440,64L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/* 
     
      {/* Forms*/}
      <div className="flex justify-center mt-20 pt-10 ">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/50 hover:shadow-violet-500/100 transition duration-300">
          <form className=" bg-black rounded-xl shadow-lg p-10">
            <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">Create Character</h2>

            {/* Input fält start*/}
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Backstory
              </label>
              <input className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20" id="username" type="text" placeholder="" />
            </div>
            {/* Input fält Stop*/}

            {/* button start */}
            <div className="flex items-center justify-between">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10" type="button">
                SUBMIT
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10" type="button">
                CANCEL
              </button>
            </div>
            {/* button end */}

          </form>
        </div>
      </div>
    </>
  );
}


export default DashBoard2;