import React, { useState } from "react";

const ConditionalRendering = () => {
  const [buttonShown, setButtonShown] = useState(false);
  const [boxShown, setBoxShown] = useState(false);

  const handleBoxShown = () => {
    setBoxShown(!boxShown);
  };

  return (
    <div>
      <h1 className="uppercase flex justify-center text-4xl">
        conditional rendering test
      </h1>
      <div className="flex justify-center">
        {buttonShown ? (
          <button
            className="w-auto p-2 m-5 bg-red-500 rounded text-white"
            onClick={() => setButtonShown(false)}
          >
            klik disini untuk menyembunyikan text
          </button>
        ) : (
          <button
            className="w-auto p-2 m-5 bg-sky-500 rounded text-white"
            onClick={() => setButtonShown(true)}
          >
            klik disini untuk munculkan text
          </button>
        )}
      </div>

      {buttonShown && (
        <div className="flex justify-center">
          <p>Ini teks yang muncul setelah tombol diklik!</p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          className="w-auto p-2 m-5 bg-indigo-500 rounded text-white"
          onClick={handleBoxShown}
        >
          klik disini untuk {boxShown ? "hilangkan" : "munculkan"} box
        </button>
      </div>
      <div className="flex justify-center">
        {boxShown && (
          <div className="size-20 border-8 border-indigo-300 flex items-center justify-center">
            box
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionalRendering;
