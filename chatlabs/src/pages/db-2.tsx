
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
      
      <div className="flex justify-center mt-20 pt-10">
        <div className="h-80 w-96 bg-black rounded-lg shadow-lg p-6">
          <h2 className="text-xl text-violet-500 justify-center font-semibold mb-4 uppercase">Create Character</h2>
          {/* Forms*/}
          <form>
            <div className="mb-4">  
              
            </div>
            
            {/* Cancel och Submit knapppar*/}
            <div className="flex justify-end ">
              <button
               
              >
              </button>
              <button>


              </button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
   

export default DashBoard2;