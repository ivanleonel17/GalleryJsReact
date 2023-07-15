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

<div className="mt-3">
  <p>Ubicacion fotografia: {props.photo.user.location}</p>
  <p>Camara: {props.photo.exif && props.photo.exif.model}</p>

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
