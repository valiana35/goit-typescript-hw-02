import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../App";

type Props = {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: Props) => {
    return (
          <ul className={css.card}>
            {images.map((image) => {
              return (
                <li key={image.id} className={css.cardItem}>
                   <ImageCard image={image} openModal={openModal} />
                </li>
              );
          })}
        </ul>
    );
}

export default ImageGallery;