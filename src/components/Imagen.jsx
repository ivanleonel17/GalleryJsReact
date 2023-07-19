import React from "react";

const Imagen = (props) => {
  const titleStyle = {
    fontFamily: "'Roboto', sans-serif",
  };

  const infoStyle = {
    fontFamily: "'Roboto', sans-serif",
  };

  return (
    <article className="shadow-md bg-white rounded-3xl p-5">
      {/* Mostrar imagen obtenida de Unsplash */}
      <img
        src={props.photo.urls.full}
        alt={props.photo.alt_description}
        loading="lazy"
        className="h-52 w-full object-cover rounded-3xl md:h-80"
      />

      <div className="mt-3">
        {/* Mostrar informacion de la ubicacion de la fotografia */}
        <p style={titleStyle}>
          <strong>Ubicación fotografía:</strong>{" "}
          <span style={infoStyle}>{props.photo.user.location || 'No hay información'}</span>
        </p>

        {/* Mostrar informacion de la camara utilizada */}
        <p style={titleStyle}>
          <strong>Cámara:</strong>{" "}
          <span style={infoStyle}>{(props.photo.exif && props.photo.exif.model) || 'No hay información'}</span>
        </p>

        {/* Mostrar etiquetas asociadas a la imagen */}
        <div className="flex flex-wrap">
          {props.photo.tags?.map((tag) => (
            <p key={tag.title} className="text-red-500 font-bold mr-2 mb-2">
              {tag.title}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Imagen;
