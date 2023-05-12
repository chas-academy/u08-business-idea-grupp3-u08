import { Link } from "react-router-dom";

function DashBoard2() {
  return (
    <>
      <section className="flex justify-center bg-neutral-950">
        <div className="w-full h-full md:max-w-2xl">
          <section className="flex flex-row justify-center my-20 md:flex-row">
            <div className="flex flex-col justify-center mr-32">
              <h1 className="text-6xl font-light uppercase text-slate-100 ">
                <span className="text-violet-500">Dash</span>Board
              </h1>
            </div>
          </section>
        </div>
      </section>

      <div className="relative w-full">
        <svg
          className="absolute inset-0 z-10 w-full -translate-y-12"
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

      <div className="flex justify-center pt-10 mt-20">
        <div className="p-6 bg-black rounded-lg shadow-lg h-80 w-96">
          <h2 className="justify-center mb-4 text-xl font-semibold uppercase text-violet-500">
            Create Character
          </h2>
          {/* Forms*/}
          <form>
            <div className="mb-4"></div>

            {/* Cancel och Submit knapppar*/}
            <div className="flex justify-end ">
              <button></button>
              <button></button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center pt-10 mt-10 ">
        <div className="bg-black text-slate-100 w-96 rounded-lg shadow-lg self-center text-center text-lg">
          <Link to="/lists">See my characters</Link>
        </div>
      </div>
    </>
  );
}

export default DashBoard2;
