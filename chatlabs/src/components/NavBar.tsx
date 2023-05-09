import { Link } from 'react-router-dom';

function NavBar() {
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
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
                to="/dashboard2"
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


/* <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-violet-500 "
              >
                Contact
              </a>
            </li> */