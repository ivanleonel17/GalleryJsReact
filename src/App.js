import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      try {
        setLoading(true);
        setMessage("");
        const url = `https://api.unsplash.com/photos/random?count=10&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
        setMessage("Error al cargar las imágenes aleatorias");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPhotos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      if (busqueda.trim() === "") {
        setMessage("Ingresa un término de búsqueda");
        return;
      }
      const url = `https://api.unsplash.com/search/photos?page=1&query=${busqueda}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setPhotos(data.results);
    } catch (error) {
      console.error(error);
      setMessage("Error al realizar la búsqueda");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    try {
      setLoading(true);
      setMessage("");
      const nextPage = Math.ceil(photos.length / 10) + 1;
      const url = `https://api.unsplash.com/photos/random?count=10&page=${nextPage}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
    } catch (error) {
      console.error(error);
      setMessage("Error al cargar más imágenes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <Formulario
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        submitForm={submitForm}
      />
      {message && <p className="text-red-500">{message}</p>}
      <ListadoImagenes photos={photos} setPhotos={setPhotos} />
      {loading && <p>Cargando...</p>}
      {!loading && (
        <button onClick={loadMoreImages}>Cargar más imágenes</button>
      )}
    </div>
  );
}

export default App;
