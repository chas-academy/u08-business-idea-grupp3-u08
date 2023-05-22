import React, { useState, ChangeEvent } from 'react';

export interface CharacterFormData {
    name: string;
    backstory: string;
  }

  interface CharacterFormProps {
    onSubmit: (formData: CharacterFormData) => Promise<void>;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [backstory, setBackstory] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await onSubmit({
      name: name.trim(),
      backstory: backstory.trim(),
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleBackstoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBackstory(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black rounded-xl shadow-lg p-10">
      <h2 className="text-xl text-violet-500 font-semibold mb-20 mt-8 uppercase text-center">Create Character</h2>

      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder=""
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Backstory
        </label>
        <input
          className="bg-black shadow appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-20"
          id="backstory"
          type="text"
          placeholder=""
          value={backstory}
          onChange={handleBackstoryChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
          type="submit"
        >
          SUBMIT
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
          type="button"
        >
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default CharacterForm;