import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const [rerender, setRerender] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
    console.log(CLIENT_ID);
  }
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function toggleUser() {
    setIsUserOpen(!isUserOpen);
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
    getUserData();
    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
            }
          });
      }
      getAccessToken();
    }
    if (!localStorage.getItem("accessToken")) {
      localStorage.removeItem("name");
    }
  }, [rerender]);

  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("name", data.login);
        localStorage.setItem("id", data.id);
        localStorage.setItem("avatar", data.avatar_url);
        setUserData(data);
        sendUserId();
      });
  }

  async function sendUserId() {
    await fetch("http://localhost:4000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("id") }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <nav className="p-3 border-gray-200 bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="../../public/logo.png"
            className="h-10"
            alt="Chatlabs Logo"
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

        <div className="relative">
          <button
            onClick={toggleUser}
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-neutral-950 rounded-t focus:outline-none focus:bg-neutral-950"
          >
            <img
              src={localStorage.getItem("avatar")}
              alt="logo"
              className="h-8 inline mr-2 rounded-full"
            />
            {localStorage.getItem("name")}
          </button>
          {isUserOpen && (
            <div>
              <div
                className={`${
                  isUserOpen ? "block" : "hidden"
                } w-full flex justify-end   md:block md:w-auto`}
                id="navbar-solid-bg"
              >
                <ul className="flex flex-col items-start px-11  bg-neutral-950 absolute rounded-b">
                  <li> </li>

                  {localStorage.getItem("accessToken") ? (
                    <>
                      <button
                        className="block   text-white rounded hover:text-violet-500"
                        onClick={() => {
                          localStorage.removeItem("accessToken");
                          setRerender(!rerender);
                        }}
                      >
                        Log out
                      </button>
                      {Object.keys(userData).length !== 0 ? <></> : <></>}
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          className="block py-2 pl-3 pr-4  text-white rounded hover:text-violet-500"
                          onClick={loginWithGithub}
                        >
                          Login
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col items-start mt-4 font-medium rounded-lg bg-neutral-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent ">
            <li></li>
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
            {/* {localStorage.getItem("accessToken") ? (
              <>
                <button
                  className="block py-2 pl-3 pr-4 text-white rounded hover:text-violet-500"
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    setRerender(!rerender);
                  }}
                >
                  Log out
                </button>
                {Object.keys(userData).length !== 0 ? (
                  <>
                    <h2 className="block py-2 pl-3 pr-4 text-white rounded">
                      {" "}
                      <img
                        src={localStorage.getItem("avatar")}
                        alt="logo"
                        className="h-8 inline mr-2 rounded-full"
                      />
                      {localStorage.getItem("name")}
                    </h2>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <li>
                  <button
                    className="block py-2 pl-3 pr-4 text-white rounded hover:text-violet-500"
                    onClick={loginWithGithub}
                  >
                    Login
                  </button>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
