import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { TrashIcon, PencilIcon, ArrowLeftIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

function DashBoard4() {
  const { id } = useParams();
  const [character, setCharacter] = useState<{ name: string; traits: string; backstory: string } | null>(null);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        console.log(`Fetching character with: `);
        const response = await axios.get(`http://localhost:4000/getone/${localStorage.getItem("userId")}/${location.state.index}`);
        console.log('Response:', response.data.character);
        console.log(response.data)
        setCharacter(response.data.character);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.log('Character not found');
        } else {
          console.log('An error occurred:', error);
        }
      }
    };
    

    fetchCharacter();
  }, [id]);

  async function updateCharacter(index: number) {
    await fetch(`http://localhost:4000/edit/${localStorage.getItem("userId")}/${index}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: "Tom", backstory: "His family was murdered", traits: "Angry killer" }),
    });
  }

  const deleteCharacter = async (index: number) => {
    const response = await fetch(`http://localhost:4000/delete/${localStorage.getItem("userId")}/${index}`, { method: "delete" });
    const res = await response.json();
    console.log(res);
  }

  if (!character) {
    return <div className='text-violet-500'>Loading...</div>;
  }

  return (
    <>
      {/*Banner */}
      <section className="bg-neutral-950">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-light text-center text-slate-100">
            <span className="text-violet-500">CHARACTER</span> PROFILE
          </h1>
        </div>
      </section>

      {/*Card */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-black rounded-lg shadow-lg card shadow-violet-500/100 outline outline-offset-2 outline-violet-950">
          <div className="p-5">
            <h1 className="mb-4 text-2xl font-semibold text-center uppercase text-violet-500">
              {character.name}
            </h1>
            <div className="mb-4">
              <h2 className="mb-2 text-lg font-medium uppercase text-violet-500">Traits:</h2>
              <div className="flex flex-wrap">
                {character.traits.split(',').map((trait, index) => (
                  <span key={index} className="zoom-in flex items-center mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-violet-700">
                    <ExclamationCircleIcon className="w-4 h-4 mr-1 text-white" />
                    <p className="text-white">{trait.trim()}</p>
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-medium uppercase text-violet-500">Backstory:</h2>
              <p className="text-white">{character.backstory}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between p-5">
            <button onClick={handleGoBack} className="flex items-center justify-center px-4 py-2 font-bold text-white rounded-lg bg-violet-700">
              <ArrowLeftIcon className="w-5 h-5 mr-1" />
              
            </button>
            <div>
              <button onClick={() => setShowForm(!showForm)} className="flex items-center justify-center px-4 py-2 mr-2 font-semibold text-white rounded-lg bg-violet-700">
                <PencilIcon className="w-5 h-5 mr-1" />
                
              </button>

              <button onClick={() => deleteCharacter()} className="flex items-center justify-center px-4 py-2 font-semibold text-white rounded-lg bg-violet-700">
                <TrashIcon className="w-5 h-5 mr-1" />
                
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-black shadow-lg rounded-xl">
          {showForm && (
            <form className="p-5">
              <h2 className="mb-4 text-lg font-semibold text-center uppercase text-violet-500">Edit Character</h2>

              {/* Input fields */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Name
                </label>
                <input className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 bg-black border-b rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Backstory
                </label>
                <input className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 bg-black border-b rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="backstory" type="text" placeholder="" />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Traits
                </label>
                <input className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 bg-black border-b rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="traits" type="text" placeholder="" />
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button onClick={() => updateCharacter()} className="px-4 py-2 font-bold text-white rounded-lg bg-violet-700" type="button">
                  EDIT
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default DashBoard4;