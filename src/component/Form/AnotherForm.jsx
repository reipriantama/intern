import React, { useState } from 'react';
import { Card } from 'flowbite-react';

const MyForm = () => {
  const initialFormData = {
    name: '',
    password: '',
    quantity: null,
    comment: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    setResult(!result);
  };

  const { name, password, quantity, comment } = formData;

  return (
    <div className='m-5'>
      <h1 className='flex justify-center text-4xl uppercase'>form example</h1>
      <form className='flex flex-col max-w-md gap-4'>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <div className='block mb-2'>
              <label htmlFor={key} className='border-indigo-400'>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            </div>
            {key === 'comment' ? (
              <textarea
                className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
                id={key}
                placeholder={`Enter ${key}`}
                name={key}
                value={value}
                onChange={handleChange}
              />
            ) : (
              <input
                className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
                id={key}
                type={key === 'quantity' ? 'number' : 'text'}
                placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                name={key}
                value={value}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <button
          className='p-2 text-white bg-indigo-400 rounded hover:bg-indigo-700'
          type='submit'
          onClick={handleClick}
        >
          Submit
        </button>

        {result && (
          <div>
            <Card className='max-w-sm'>
              <h4 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Name : {name}
              </h4>
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Password : {password}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                Quantity : {quantity}
              </p>
              <p className='font-normal text-justify text-gray-700 dark:text-gray-400'>
                {comment}
              </p>
            </Card>
          </div>
        )}
      </form>
    </div>
  );
};

export default MyForm;
