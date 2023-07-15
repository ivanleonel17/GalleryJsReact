import React from "react";
import Imagen from "./Imagen";

const ListadoImagenes = (props) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5 ml-3">
      {props.photos.map((photo) => (
        <Imagen key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default ListadoImagenes;
