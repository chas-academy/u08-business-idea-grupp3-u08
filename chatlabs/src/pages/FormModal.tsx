

function FormModal({closeFormModal}) {
    
    async function updateCharacter() {
        await fetch("http://localhost:4000/edit/645c1385353c806b4d791675/0", {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: "Tom", backstory: "His family was murderd", traits: "Angry killer"}),
        });
      }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm mb-10">
            <div className="flex justify-center mt-10 pt-10 mb-10">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/50 hover:shadow-violet-500/100 transition duration-300">
                <form className=" bg-black rounded-xl shadow-lg p-10">
                    <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">Edit Character</h2>

                    {/* Input field start*/}
                    <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />
                    </div>
                    <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Backstory
                    </label>
                    <input className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20" id="username" type="text" placeholder="" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Traits
                    </label>
                    <input className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20" id="username" type="text" placeholder="" />
                    </div>
                    {/* Input field end*/}

                    {/* cancel & edit buttons start */}
                    <div className="flex items-center justify-evenly">
                    <button onClick={() => closeFormModal(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mb-10" type="button">
                        CANCEL
                    </button>
                    <button onClick={() => updateCharacter()} className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mb-10" type="button">
                        EDIT
                    </button>
                    </div>
                    {/* buttons end */}

                </form>
            </div>
            </div>
        </div>
    )
}

export default FormModal;