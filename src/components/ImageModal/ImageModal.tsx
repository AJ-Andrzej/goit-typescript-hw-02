import Modal from 'react-modal';
import css from './ImageModal.module.css'
import {Images} from '../App/App.types'
import { FC } from 'react';
Modal.setAppElement('#root');

interface ImageModalProps {
    isModalOpen: boolean;
    image: Pick<Images, "urls"> | null
    onCloseModal: () => void
}

const ImageModal: FC<ImageModalProps> = ({ isModalOpen, image, onCloseModal }) => {
    if (image === null) return
    
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onCloseModal}
            shouldCloseOnEsc={true}
            contentLabel="Example Modal"
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {isModalOpen && (<div className={css.content}>
                <img
                    src={image.urls.regular}
                    alt={image.urls.description} />
            </div>)}
      </Modal>
    )
}

export default ImageModal