import React, { useEffect, useState } from "react";
import Imagen from "./Imagen";

const ListadoImagenes = (props) => {
  const { photos } = props;
  const [page, setPage] = useState(1); // Página inicial
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && hasMore) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  const loadMoreImages = async () => {
    try {
      setLoading(true);
      const url = `https://api.unsplash.com/photos?page=${page + 1}&per_page=10&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        // Hay más imágenes disponibles
        setHasMore(true);
        setPage((prevPage) => prevPage + 1);
        // Agregar las nuevas imágenes al estado existente
        props.setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } else {
        // No hay más imágenes disponibles
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-3">
      {photos.map((photo) => (
        <Imagen key={photo.id} photo={photo} />
      ))}
      {loading && <p>Cargando más imágenes...</p>}
      {!hasMore && <p>No hay más imágenes</p>}
    </div>
  );
};

export default ListadoImagenes;
