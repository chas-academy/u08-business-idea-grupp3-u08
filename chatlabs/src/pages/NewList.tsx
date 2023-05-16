import { useState, useEffect } from "react";

function NewList() {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/characters/645c1385353c806b4d791675") //Skapa dynamiskt!
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.characters);
      });
  }, []);

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

      <section className="flex justify-center pt-10 mt-16 mx-3">
        <div className="flex flex-col w-3xl justify-center">
          <div className="my-10 flex flex-row md:flex-row justify-center">
            <h1 className="justify-center mb-4 text-xl font-semibold uppercase text-violet-500">
              Characters
            </h1>
          </div>
          <div className="flex flex-row border-b-2 border-neutral-100 my-2 justify-between">
            <nav
              aria-roledescription="listMenu"
              className="text-slate-100 text-sm md:text-md uppercase font-light md:font-bold"
            >
              {" "}
              <a href="#" className="px-2">
                Name
              </a>
              <a href="#" className="px-2">
                Traits
              </a>
              <a href="#" className="px-2">
                Created
              </a>
            </nav>
            <nav
              aria-roledescription="editMenu"
              className="text-slate-100 text-sm md:text-md uppercase font-light md:font-bold"
            >
              {" "}
              <a href="#" className="px-2">
                Add
              </a>
              <a href="#" className="px-2">
                Edit
              </a>
              <a href="#" className="px-2">
                Delete
              </a>
            </nav>
          </div>
          {
            <div className="flex flex-col bg-neutral-500 p-4 rounded-xl w-full">
              {userData &&
                userData.map((character: any) => {
                  //Hur får vi ut created-datumet? Ska det finnas med?
                  return (
                    <div
                      className="flex flex-row items-center justify-center bg-neutral-950 text-neutral-100 py-2"
                      key={character.id}
                    >
                      <h3 className="list-none font-semibold px-2">
                        {character.name}
                      </h3>
                      <p className="px-2">{character.traits}</p>
                      <p className="px-2">yyyy-mm-dd</p>
                      <button className="px-2 bg-neutral-600 rounded-md p-1 m-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          />
                        </svg>
                      </button>
                      <button className="px-2 bg-neutral-600 rounded-md p-1 m-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                      <button className="px-2 bg-neutral-600 rounded-md p-1 m-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              <div className="flex flex-row justify-between p-4">
                <h2 className="justify-center mb-4 text-xl font-semibold text-slate-950">
                  Create new character
                </h2>
                <button className="cursor-pointer">
                  <img
                    src="../../public/NewCharacterButton.svg"
                    className="h-10"
                    alt="New character button"
                  />
                </button>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
export default NewList;
