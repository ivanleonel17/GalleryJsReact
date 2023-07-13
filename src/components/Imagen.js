import React from "react";

const Imagen = ({ photo }) => {
	return (
		<img
			className="m-2 w-3/12 h-auto"
			src={photo.urls.small}
			alt={photo.alt_description}
		/>
	);
};

export default Imagen;