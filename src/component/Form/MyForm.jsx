import React, { useState } from 'react';
import { Card } from 'flowbite-react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [comment, setComment] = useState('');

  const [result, setResult] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeQuantity(e) {
    setQuantity(e.target.value);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setResult(!result);
  }

  return (
    <div className='m-5'>
      <h1 className='flex justify-center text-4xl uppercase'>form example</h1>
      <form className='flex flex-col max-w-md gap-4'>
        <div>
          <div className='block mb-2'>
            <label htmlFor='text' className='border-indigo-400'>
              Your Name
            </label>
          </div>
          <input
            className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
            id='text'
            type='text'
            placeholder='Your Name'
            onChange={handleChangeName}
          />
        </div>

        <div>
          <div className='block mb-2'>
            <label htmlFor='password'>Your Password</label>
          </div>
          <input
            className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
            id='password'
            type='password'
            placeholder='password'
            onChange={handleChangePassword}
          />
        </div>

        <div>
          <div className='block mb-2'>
            <label>Set Quantity</label>
          </div>
          <input
            className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
            id='quantity'
            type='number'
            placeholder='quantity'
            onChange={handleChangeQuantity}
          />
        </div>

        <div>
          <div className='block mb-2'>
            <label>Comment</label>
          </div>
          <textarea
            className='block w-full text-gray-900 border-gray-300 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-indigo-400 focus:ring-indigo-500 p-2.5 rounded-lg'
            id='quantity'
            type='number'
            placeholder='Enter comment'
            onChange={handleChangeComment}
          />
        </div>

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
                {' '}
                Password : {password}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {' '}
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
