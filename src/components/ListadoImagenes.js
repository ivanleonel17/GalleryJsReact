import React from "react";
import Imagen from "./Imagen";

const ListadoImagenes = ({ photos }) => {
	return (
		<div className="container mt-4 flex flex-wrap">
			{photos.map((photo) => (
				<Imagen key={photo.id} photo={photo}>
					Photo
				</Imagen>
			))}
		</div>
	);
};

export default ListadoImagenes;