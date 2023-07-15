import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const Formulario = ({ busqueda, setBusqueda, submitForm }) => {
    const inputRef = useRef(null);
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (typeof submitForm === 'function') {
        submitForm(e); // Pasa el evento como argumento a la función submitForm
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
                  className="appearance-none border-b border-gray-300 py-2 px-4 rounded-l-lg w-full focus:outline-none"
                  type="text"
                  placeholder ="Search"
                  onChange={(e) => setBusqueda(e.target.value)}
                  value={busqueda}
                  id="search-input"
                />
                <label
                  htmlFor="search-input"
                  className="flex items-center px-3 cursor-pointer font-bold text-gray-400"
                  onClick={handleSearch}
                >
                  <BsSearch />
                </label>
              </div>
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-400 font-bold"></div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default Formulario;
  
  