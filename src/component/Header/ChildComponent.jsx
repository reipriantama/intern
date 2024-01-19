import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <button
        className='px-2 py-2 m-3 font-bold text-black uppercase bg-gray-600 rounded-full cursor-pointer'
        type='button'
        onClick={props.alert}
      >
        klik untuk menerima dari header{' '}
      </button>
    </div>
  );
};

export default ChildComponent;
