import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import {Images} from '../App/App.types'
import { FC } from "react";

interface ImageListProps{
  onImageClick: (image: Images) => void;
  images: Images[]
}

const ImageGallery: FC<ImageListProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery