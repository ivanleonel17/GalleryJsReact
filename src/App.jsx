import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  // almacenar el termino de búsqueda del usuario
  const [busqueda, setBusqueda] = useState("");

  // almacenar las fotos obtenidas de Unsplash
  const [photos, setPhotos] = useState([]);

  // mostrar mensajes al usuario
  const [message, setMessage] = useState("");

  // indica si se estan cargando datos
  const [loading, setLoading] = useState(false);

  // controla si hay mas imagenes disponibles para cargar
  const [hasMore, setHasMore] = useState(true);

  // Al cargar la aplicación se obtienen fotos aleatorias
  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  // Funcion para obtener fotos aleatorias de Unsplash 
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

  // Funcion para cargar mas imagenes cuando el usuario llega al final de la pagina
  const loadMoreImages = async () => {
    try {
      setLoading(true);
      const nextPage = Math.ceil(photos.length / 10) + 1;
      let url = "";
      if (busqueda.trim() === "") {
        url = `https://api.unsplash.com/photos/random?count=10&page=${nextPage}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
      } else {
        url = `https://api.unsplash.com/search/photos?page=${nextPage}&query=${busqueda}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      if ((data.results && data.results.length > 0) || (data && data.length > 0)) {
        setHasMore(true);
        setPhotos((prevPhotos) => [...prevPhotos, ...(data.results || data)]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error al cargar más imágenes");
    } finally {
      setLoading(false);
    }
  };

  // Funcion para realizar la busqueda de imágenes en Unsplash 
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
      if (data.results.length > 0) {
        setPhotos(data.results);
        setHasMore(true);
      } else {
        setPhotos([]);
        setMessage("No se encontraron resultados de búsqueda");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error al realizar la búsqueda");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      {/* Componente Formulario para realizar busquedas */}
      <Formulario
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        submitForm={submitForm}
      />

      {/* Mostrar mensajes de error */}
      {message && <p className="text-red-500">{message}</p>}

      {/* Componente ListadoImagenes para mostrar las imágenes */}
      <ListadoImagenes
        photos={photos}
        setPhotos={setPhotos}
        loadMoreImages={loadMoreImages}
        hasMore={hasMore}
      />

      {/* Mostrar mensaje de carga */}
      {loading && <p>Cargando...</p>}
    </div>
  );
}

export default App;
