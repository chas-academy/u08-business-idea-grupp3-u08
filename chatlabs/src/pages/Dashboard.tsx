import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewList() {
  const [userData, setUserData] = useState<any[]>([]);

  const deleteCharacter = async () => {
    const confirmDelete = window.confirm("Delete character?"); // Val att fortsätta eller avbryta
    if (confirmDelete) {
      const response = await fetch(
        "http://localhost:4000/delete/645c1385353c806b4d791675/0",
        { method: "delete" }
      );
      const res = await response.json();
      console.log(res);
    } else {
      // Avbryt
      alert("Character not deleted");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/characters/645c1385353c806b4d791675") //Skapa dynamiskt id!
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

          <>
            {userData &&
              userData.map((character: any) => {
                const truncateText = (text: string, limit: number) => {
                  const words = text.split(" ");
                  if (words.length > limit) {
                    return words.slice(0, limit).join(" ") + "...";
                  }
                  return text;
                };

                return (
                  <>
                    <div className="grid grid-cols-1 gap-4 bg-neutral-500 p-4 my-4 rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/75 transition duration-300">
                      <div
                        className="grid grid-cols-8 gap-6 bg-neutral-950 text-neutral-100 py-2 px-4 rounded-md"
                        key={character._id}
                      >
                        <div className="col-span-2">
                          <div className="flex flex-col">
                            <h3 className="text-violet-500 uppercase ">Name</h3>
                            <Link to="/dashboard4">
                              <p className="text-slate-100 text-md px-5 md:px-0 hover:text-violet-500 hover:font-semibold">
                                {truncateText(character.name, 2)}
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="col-span-2">
                          {character.traits && (
                            <div className="flex flex-col">
                              <h3 className="text-violet-500 uppercase ">
                                Traits
                              </h3>
                              <Link to="/dashboard4">
                                <p className="text-slate-100 text-md px-5 md:px-0 hover:text-violet-500 hover:font-semibold">
                                  {truncateText(character.traits, 2)}
                                </p>
                              </Link>
                            </div>
                          )}
                        </div>
                        <div className="col-span-2">
                          {character.backstory && (
                            <div className="flex flex-col">
                              <h3 className="text-violet-500 uppercase ">
                                Backstory
                              </h3>
                              <Link to="/dashboard4">
                                <p className="text-slate-100 text-md px-5 md:px-0 hover:text-violet-500 hover:font-semibold">
                                  {truncateText(character.backstory, 2)}
                                </p>
                              </Link>
                            </div>
                          )}
                        </div>
                        <div className="col-span-8 md:col-span-1 md:col-start-8 flex justify-end items-end">
                          <div className="grid grid-cols-1 gap-2">
                            <h3 className="text-slate-100 text-md text-center font-semibold">
                              Edit
                            </h3>
                            <button className="px-2 bg-neutral-600 rounded-md p-1 m-1 hover:opacity-70">
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
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            <h3 className="text-slate-100 text-md text-center font-semibold">
                              Delete
                            </h3>
                            <button
                              onClick={() => deleteCharacter()}
                              className="px-2 bg-neutral-600 rounded-md p-1 m-1 hover:opacity-70"
                            >
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
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </>

          <div className="flex flex-col p-2 my-12 md:w-72 border-l-4 border-violet-500">
            <button
              role="button"
              className="bg-violet-600 rounded-md py-2 px-4 font-semibold text-slate-100 uppercase cursor-pointer hover:border-2 hover:border-slate-100 hover:pb-1 shadow-lg shadow-amber-200/20 hover:shadow-amber-200/75 transition duration-300"
            >
              <Link to="/dashboard2">Create character</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default NewList;
