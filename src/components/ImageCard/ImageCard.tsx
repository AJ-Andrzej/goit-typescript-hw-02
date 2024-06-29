import css from "./ImageCard.module.css";
import { Images } from "../App/App.types";
import { FC } from "react";

interface ImageCardProps{
  onImageClick: () => void;
  image: Pick<Images, "urls">
}

const ImageCard: FC<ImageCardProps> = ({
  onImageClick,
  image: {
    urls: { small, description },
  },
}) => {
  return (
    <div>
      <img
        onClick={onImageClick}
        className={css.card}
        src={small}
        alt={description}
      />
    </div>
  );
}
export default ImageCard