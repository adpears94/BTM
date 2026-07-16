import { useEffect } from 'react';
import type { ProductImage } from '../types';

type ImageModalProps = {
  image: ProductImage | null;
  onClose: () => void;
};

function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!image) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Full screen product image"
      onClick={onClose}
    >
      <button
        className="modal-close"
        type="button"
        onClick={onClose}
        aria-label="Close full screen image"
      >
        X
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

export default ImageModal;
