import React from 'react';
import { Link } from 'react-router-dom';

export interface CharacterFormData {
  name: string;
  backstory: string;
}

interface CharacterFormProps {
  name: string;
  backstory: string;
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBackstoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (formData: CharacterFormData) => Promise<void>;
}

const CharacterForm: React.FC<CharacterFormProps> = ({
  name,
  backstory,
  onNameChange,
  onBackstoryChange,
  onSubmit,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await onSubmit({
      name: name.trim(),
      backstory: backstory.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-xl shadow-lg p-10">
      <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">Create Character</h2>

      <div className="mb-2">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder=""
          value={name}
          onChange={onNameChange} // Använd onNameChange här för att binda händelsehanteraren
        />
      </div>

      <div className="mb-4">
        <label htmlFor="backstory" className="block text-gray-700 text-sm font-bold mb-2">
          Backstory
        </label>
        <input
          className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20"
          id="backstory"
          type="text"
          placeholder=""
          value={backstory}
          onChange={onBackstoryChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          to="/Dashboard"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
        >
          Submit
        </Link>
        
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
        >
          CANCEL
        </Link>
      </div>
    </form>
  );
};

export default CharacterForm;
