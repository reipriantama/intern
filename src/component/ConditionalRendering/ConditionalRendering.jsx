import React, { useState } from "react";

const ConditionalRendering = () => {
  const [buttonShown, setButtonShown] = useState(false);
  const [boxShown, setBoxShown] = useState(false);

  const handleBoxShown = () => {
    setBoxShown(!boxShown);
  };

  return (
    <div>
      <h1 className="flex justify-center text-4xl uppercase">
        conditional rendering test
      </h1>
      <div className="flex justify-center">
        {buttonShown ? (
          <button
            className="w-auto p-2 m-5 text-white bg-red-500 rounded"
            onClick={() => setButtonShown(false)}
          >
            klik disini untuk menyembunyikan text
          </button>
        ) : (
          <button
            className="w-auto p-2 m-5 text-white rounded bg-sky-500"
            onClick={() => setButtonShown(true)}
          >
            klik disini untuk munculkan text
          </button>
        )}
      </div>

      {!!buttonShown && (
        <div className="flex justify-center">
          <p>Ini teks yang muncul setelah tombol diklik!</p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="w-auto p-2 m-5 text-white bg-indigo-500 rounded"
          onClick={handleBoxShown}
        >
          klik disini untuk {boxShown ? "hilangkan" : "munculkan"} box
        </button>
      </div>
      <div className="flex justify-center">
        {boxShown && (
          <div className="flex items-center justify-center border-8 border-indigo-300 size-20 bg-sky-500">
            box
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionalRendering;
