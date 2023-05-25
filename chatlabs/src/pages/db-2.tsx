import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import CharacterForm, { CharacterFormData } from '../components/CharacterForm';

const DashBoard2: React.FC = () => {
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (formData: CharacterFormData): Promise<void> => {
    console.log(formData)
    try {
      const { name, backstory } = formData;
      console.log("test")
      const response = await fetch('http://localhost:4000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          backstory,
        }),
      });

      const data = await response.json();
      setResponse(data.message);

      // Navigera till en annan sida efter att formuläret har skickats
      navigate('/Dashboard');
    } catch (error) {
      console.error(error);
    }
  };

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
      <section className="flex justify-center bg-neutral-950">
        {/* ... */}
      </section>

      {/* ... */}

      <div className="flex justify-center mt-20 pt-10 mb-20">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/50 hover:shadow-violet-500/100 transition duration-300">
          <CharacterForm onSubmit={handleSubmit} />
        </div>
      </div>
      {response && <p>{response}</p>}
      <Footer />
    </>
  );
};

export default DashBoard2;