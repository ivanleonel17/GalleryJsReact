import React,{useState} from "react";

const Formulario = () => {
    const [busqueda, setBusqueda] = useState("")
    const [photos, setPhotos] = useState([]);
    
    const submitForm = async (e) =>{
        e.preventDefault();
        const url = `https://api.unsplash.com/search/photos?page=1&query=${busqueda}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setPhotos(data.results);
        
    };
    console.log(photos);
    return (
    <div>
        <form onSubmit={submitForm}> 
            
            <div className="flex flex-col mt-4">
                <label>Ingresa un valor</label>
                <input className="border border-gray-400 p-2 rounded mt-2 w-1/3"
						type="text"
            placeholder="Busca una imagen, ejemplo: paisajes o futbol"
            onChange={(e) =>setBusqueda(e.target.value)}
            value={busqueda}
           />
            <button className="inline bg-teal-500 rounded-sm w-1/5 mt-4 text-white p-2 hover:bg-teal-600 transition-all"
						 type="submit">Buscar
            
            </button>
        </div>
        
        </form>
</div>
);
}

export default Formulario;