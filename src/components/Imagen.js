import React from "react";

const Imagen = (props) => {
  const { photo } = props;

  const ubicacion = photo.user.location || "No hay información";
  const camara = photo.exif && photo.exif.model ? photo.exif.model : "No hay información";

  return (
    <article className="shadow-md bg-white rounded-3xl p-5">
      <img
        src={photo.urls.full}
        alt={photo.alt_description}
        loading="lazy"
        className="h-52 w-full object-cover rounded-3xl md:h-80"
      />

      <div className="mt-3">
        <p>Ubicacion fotografia: {ubicacion}</p>
        <p>Camara: {camara}</p>

        <div className="flex flex-wrap">
          {photo.tags?.map((tag) => (
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
