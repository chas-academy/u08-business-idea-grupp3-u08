import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="p-3 border-gray-200 bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="../../public/logo.png"
            className="h-10"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold text-white">
            <span className="text-violet-500">Chat</span> Labs
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-violet-500 rounded-lg md:hidden hover:bg-neutral-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col mt-4 font-medium rounded-lg bg-neutral-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-violet-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-violet-500"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-violet-500"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
