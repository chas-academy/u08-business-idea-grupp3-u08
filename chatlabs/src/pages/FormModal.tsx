import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormModal({closeFormModal, data}: {closeFormModal: (arg0: boolean)=> void, data: number}) {
    
    console.log(data);

    const [initialForm, setInitialForm] = useState({name: "", backstory: "", traits: ""});

    function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInitialForm({...initialForm, [event.target.id]: event.target.value})
    }

    async function updateCharacter(index: number) {
        await fetch(`http://localhost:4000/edit/${localStorage.getItem("userId")}/${index}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name: initialForm.name, backstory: initialForm.backstory, traits: initialForm.traits}),
        });
        navigate(0);
      }

      const navigate = useNavigate();

    return(
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="flex justify-center mt-14">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/100 transition duration-300">
                <form className=" bg-black rounded-xl shadow-lg p-5">
                    <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">Edit Character</h2>

                    {/* Input field start*/}
                    <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input onChange={handleFormChange} id="name" className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                    </div>
                    <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Backstory
                    </label>
                    <input onChange={handleFormChange} id="backstory" className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                    </div>
                    <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Traits
                    </label>
                    <input onChange={handleFormChange} id="traits" className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20" type="text" placeholder="" />
                    </div>
                    {/* Input field end*/}

                    {/* cancel & edit buttons start */}
                    <div className="flex items-center justify-evenly">
                    <button onClick={() => closeFormModal(false)} className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mb-10" type="button">
                        CANCEL
                    </button>
                    <button onClick={() => updateCharacter(data)} className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mb-10" type="button">
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