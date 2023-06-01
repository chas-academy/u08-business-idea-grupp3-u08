import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid"
import ChatPrompt from "../components/ChatPrompt"

function DashBoard4() {
  const { id } = useParams()
  const [character, setCharacter] = useState<{
    name: string
    backstory: string
  } | null>(null)
  const location = useLocation()
  const [showForm, setShowForm] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        console.log(`Fetching character with: `)
        const response = await axios.get(
          `http://localhost:4000/getone/${localStorage.getItem("userId")}/` +
            `${location.state.index}`
        )
        console.log("Response:", response.data.character)
        console.log(response.data)
        console.log("THIS IS CHARACTER NR=" + location.state.index)
        setCharacter(response.data.character)
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.log("Character not found")
        } else {
          console.log("An error occurred:", error)
        }
      }
    }

    fetchCharacter()
  }, [id])

  async function updateCharacter(index: number) {
    await fetch(
      `http://localhost:4000/edit/${localStorage.getItem("userId")}/${index}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Tom",
          backstory: "His family was murderd",
          traits: "Angry killer",
        }),
      }
    )
  }

  const deleteCharacter = async (index: number) => {
    const response = await fetch(
      `http://localhost:4000/delete/${localStorage.getItem("userId")}/${index}`,
      { method: "delete" }
    )
    const res = await response.json()
    console.log(res)
  }

  if (!character) {
    return <div className="text-violet-500">Loading...</div>
  }
  return (
    <>
      {/* modal */}
      {showChat && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-950/75">
          <div className="bg-neutral-800 rounded-lg w-2/3 h-4/6 max-h overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-violet-800 scrollbar-track-neutral-800 flex flex-col">
            <button
              className="self-end p-2 text-violet-600 hover:text-violet-400 fixed z-10"
              onClick={() => setShowChat(!showChat)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            <ChatPrompt index={location.state.index} />
          </div>
        </div>
      )}

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
            fillOpacity="1"
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
            <h2 className="text-xl pr-10 text-violet-500 font-medium uppercase">
              Description:
            </h2>
            <p className="text-white mt-10 mb-40">{character.backstory}</p>
          </div>
          {/* Buttons */}
          <div className="flex justify-between mt">
            <button className="px-7 py-2 bg-zinc-600 text-white font-semibold rounded-lg uppercase">
              Back
            </button>
            <div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="px-4 py-2  bg-zinc-600 text-white font-semibold rounded-lg mr-2"
              >
                <PencilIcon className="h-5 w-5" /> {/* Penna Icon */}
              </button>

              <button
                onClick={() => deleteCharacter()}
                className="px-4 py-2  bg-zinc-600 text-white font-semibold rounded-lg"
              >
                <TrashIcon className="h-5 w-5 " /> {/* Papperskorg Icon */}
              </button>
              <button
                onClick={() => setShowChat(!showChat)}
                className="px-4 py-2  bg-violet-700 text-white rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 pt-10 mb-10">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/50 hover:shadow-violet-500/100 transition duration-300">
          {showForm && (
            <form className=" bg-black rounded-xl shadow-lg p-10">
              <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">
                Edit Character
              </h2>

              {/* Input fält start*/}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Backstory
                </label>
                <input
                  className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Traits
                </label>
                <input
                  className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20"
                  id="username"
                  type="text"
                  placeholder=""
                />
              </div>
              {/* Input fält Stop*/}

              {/* button start */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => updateCharacter()}
                  className="bg-zinc-600 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mb-10"
                  type="button"
                >
                  EDIT
                </button>
              </div>
              {/* button end */}
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default DashBoard4
