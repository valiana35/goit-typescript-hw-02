import css from './ImageCard.module.css';
import { Image } from '../../App';
import { FC } from 'react';

interface ImageProps {
    image: Image;
    openModal: (image: Image) => void;
}

const ImageCard: FC<ImageProps> = ({ image, openModal }) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} onClick={() => openModal(image)} className={css.imgCard}/>
        </div>
    ); 
}

export default ImageCard;