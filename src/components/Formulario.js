import React from "react";
import { BsSearch } from "react-icons/bs";

const Formulario = ({ busqueda, setBusqueda, submitForm }) => {
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="flex mt-4 ml-5">
          <input
            className="appearance-none border-t border-l border-b border-gray-300 py-2 px-4 rounded-l-lg w-1/2 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search"
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
            type="submit"
          >
            <BsSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
