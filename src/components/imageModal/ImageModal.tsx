import { FC } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

interface ModalProps {
  url: string;
  alt: string;
  description: string;
  likes: number;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal: FC<ModalProps> = ({ url, alt, modalIsOpen, closeModal, description, likes }) => {
    return  (
      <div>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
       >
          <img src={url} alt={alt} />
          <p>{description}</p>
          <p>Likes: {likes}</p>
       </Modal>
      </div>
    );
}

export default ImageModal;