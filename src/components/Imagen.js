import React from "react";

const Imagen = (props) => {
  return (
    <article className="shadow-md bg-white rounded-3xl p-5">
      <img
        src={props.photo.urls.full}
        alt={props.photo.alt_description}
        loading="lazy"
        className="h-52 w-full object-cover rounded-3xl md:h-80"
      />

      <div>
        <p>Ubicacion fotografia: {props.photo.user.location}</p>
        <p>Camara: {props.photo.exif && props.photo.exif.model}</p>
        <p>Etiquetas:</p>
        <ul>
          {props.photo.tags.map((tag) => (
            <li key={tag.title}>{tag.title}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Imagen;
