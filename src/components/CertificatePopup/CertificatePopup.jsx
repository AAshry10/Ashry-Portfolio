import React from 'react';
import './CertificatePopup.css';

const isVideoSource = (source) => /\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(source);

const CertificatePopup = ({
  certificate,
  media,
  mediaType,
  isOpen,
  onClose,
}) => {
  const source = media || certificate;
  if (!isOpen || !source) return null;

  const resolvedMediaType = mediaType || (isVideoSource(source) ? 'video' : 'image');
  const isVideo = resolvedMediaType === 'video';

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="certificate-popup-overlay"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className="certificate-popup-container"
        role="dialog"
        aria-modal="true"
        aria-label={isVideo ? 'Odoo demo video' : 'Certificate image'}
      >
        <button
          className="certificate-popup-close"
          onClick={onClose}
          aria-label="Close dialog"
          type="button"
        >
          <i className="fa-solid fa-times" aria-hidden="true"></i>
        </button>

        <div className={'certificate-popup-content' + (isVideo ? ' certificate-popup-content-video' : '')}>
          {isVideo ? (
            <video
              src={source}
              className="certificate-video"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support video playback.
            </video>
          ) : (
            <img
              src={source}
              alt="Certificate"
              className="certificate-image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatePopup;
