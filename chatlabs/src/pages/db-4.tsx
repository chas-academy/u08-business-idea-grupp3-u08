import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid';


function DashBoard4() {

  const { id } = useParams();
  const [character, setCharacter] = useState<{ name: string, backstory: string } | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        console.log(`Fetching character with: `);
        const response = await axios.get(`http://localhost:4000/characters/645c1385353c806b4d791675`);
        console.log('Response:', response.data.characters[0]);
        setCharacter(response.data.characters[0]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('Character not found');
        } else {
          console.log('An error occurred:', error);
        }
      }
    };

    
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className='text-violet-500'>Loading...</div>;
  }
    return (
      <>
        {/*Banner */}
        <section className=" flex justify-center bg-neutral-950">
          <div className="w-full h-full md:max-w-2xl">
            <section className="flex flex-row justify-center my-20 md:flex-row">
              <div className="flex flex-col justify-center mr-32">
                <h1 className=" text-6xl font-light uppercase text-slate-100 ">
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
        


        {/*Card */}
      <div className="flex justify-center pt-5 px-96 m-36 ">
      <div className="p-5 bg-black rounded-lg h-full shadow-lg shadow-violet-500/100 ">
          {/*Content */}
          <div className="pt-10">
            <h1 className="text-3xl text-violet-500 font-semibold text-center mb-40 uppercase">
              {character.name}
            </h1>
          </div>
          <div className="mx-10">
            <h2 className="text-xl pr-10 text-violet-500 font-medium uppercase">Description:</h2>
            <p className="text-white mt-10 mb-40">{character.backstory}</p>
          </div>
           {/* Buttons */}
           <div className="flex justify-between mt">
            <button className="px-7 py-2 bg-zinc-600 text-white font-semibold rounded-lg uppercase">Back</button>
            <div>
              <button className="px-4 py-2  bg-zinc-600 text-white font-semibold rounded-lg mr-2">
              <PencilIcon className="h-5 w-5" /> {/* Penna Icon */}
              </button>

              <button className="px-4 py-2  bg-zinc-600 text-white font-semibold rounded-lg">
              <TrashIcon className="h-5 w-5 " /> {/* Papperskorg Icon */}

              </button>
              </div>
              </div>
              </div>
              </div>
              </>
              );
            }
  
export default DashBoard4;