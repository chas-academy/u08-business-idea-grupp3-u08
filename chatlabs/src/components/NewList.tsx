function NewList() {
  return (
    <>
      <section className="flex justify-center px-4">
        <div className="flex flex-col justify-center">
          <div className="my-10 flex flex-row md:flex-row justify-center">
            <h1 className="text-slate-100 text-2xl md:text-3xl font-bold uppercase">
              <span className="text-violet-500">Character</span> Lists
            </h1>
          </div>
          <div className="flex flex-row border-b-2 border-neutral-100 my-2 justify-center">
            <nav
              aria-roledescription="listMenu"
              className="text-slate-100 text-sm md:text-md uppercase font-light md:font-bold"
            >
              {" "}
              <a href="#" className="px-2">
                Name
              </a>
              <a href="#" className="px-2">
                Description
              </a>
              <a href="#" className="pr-8">
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
          <div className="flex flex-col bg-neutral-500 py-4 px-4 rounded-xl max-w-screen-lg">
            <div className="flex flex-row bg-neutral-950 text-neutral-100 p-2">
              <h3 className="font-semibold text-sm px-2">Bla bla</h3>
              <p className="px-2 text-sm">Lorem ipsum si dolor amet...</p>
              <p className="pr-8 text-sm">yyyy-mm-dd</p>
              <button>
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
              <button>
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
              <button>
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
      </section>
    </>
  );
}
export default NewList;
