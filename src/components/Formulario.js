import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "./Formulario.css";

const Formulario = ({ busqueda, setBusqueda, submitForm }) => {
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (typeof submitForm === "function") {
      submitForm(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex mt-4 ml-5">
          <div className="relative w-1/2">
            <div className="flex">
              <input
                ref={inputRef}
                className="appearance-none border-b border-gray-300 py-2 px-4 rounded-l-lg w-full focus:outline-none placeholder-color"
                type="text"
                placeholder="Search"
                onChange={(e) => setBusqueda(e.target.value)}
                value={busqueda}
                id="search-input"
              />

              <button
                className="flex items-center px-4 cursor-pointer font-bold bg-transparent border-none"
                onClick={handleSearch}
              >
                <BsSearch className="search-icon" />
              </button>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-1 line"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
