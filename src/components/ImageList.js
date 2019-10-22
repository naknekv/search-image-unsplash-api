import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default props => {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));

  // MAP
  /*   const images = props.images.map(({ id, alt_description, urls }) => (
    <img key={id} alt={alt_description} src={urls.regular} />
  )); */
  return <div className="image-list">{images}</div>;
};
