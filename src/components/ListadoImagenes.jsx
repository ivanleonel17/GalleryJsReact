import React, { useEffect } from "react";
import Imagen from "./Imagen";

const ListadoImagenes = ({ photos, setPhotos, loadMoreImages, hasMore }) => {
  // useEffect para detectar cuando el usuario llega al final de la pagina
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMoreImages, hasMore]);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-3">
      {/* Mostrar imagenes utilizando el componente Imagen */}
      {photos.map((photo) => (
        <Imagen key={photo.id} photo={photo} />
      ))}

      {/* Mostrar mensaje cuando no hay mas imagenes para cargar */}
      {!hasMore && <p>No hay más imágenes</p>}
    </div>
  );
};

export default ListadoImagenes;
