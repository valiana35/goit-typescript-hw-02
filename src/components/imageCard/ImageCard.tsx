import css from './ImageCard.module.css';
import { Image } from '../../App';


type Props = {
    image: Image;
    openModal: (image: Image) => void;
}

const ImageCard = ({ image, openModal }: Props) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} onClick={() => openModal(image)} className={css.imgCard}/>
        </div>
    ); 
}

export default ImageCard;