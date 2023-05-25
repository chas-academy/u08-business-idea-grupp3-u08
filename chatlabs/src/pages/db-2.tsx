import React, { useState } from 'react';
import Footer from '../components/Footer';
import CharacterForm, { CharacterFormData } from '../components/CharacterForm';

const Dashboard: React.FC = () => {
  const [response, setResponse] = useState('');
  

  const handleSubmit = async (formData: CharacterFormData): Promise<void> => {
    try {
      const { name, backstory } = formData;
      const response = await fetch(`http://localhost:4000/createuser/645c1385353c806b4d791675`, {
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

      // Clear the form fields
      setName('');
      setBackstory('');
    } catch (error) {
      console.error(error);
      setResponse('An error occurred. Please try again.');
    }
  };

  const [name, setName] = useState('');
  const [backstory, setBackstory] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleBackstoryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBackstory(event.target.value);
  };

  return (
    <>
      {/* ... */}
      <div className="flex justify-center mt-20 pt-10 mb-20">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-lg shadow-violet-500/50 hover:shadow-violet-500/100 transition duration-300">
          <CharacterForm
            name={name}
            backstory={backstory}
            onNameChange={handleNameChange}
            onBackstoryChange={handleBackstoryChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      {response && <p>{response}</p>}
      <Footer />
    </>
  );
};

export default Dashboard;



