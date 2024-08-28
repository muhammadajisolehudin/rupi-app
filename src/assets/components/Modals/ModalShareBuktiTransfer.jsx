import { Box, Card, Modal, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { Instagram, Twitter, WhatsApp, Facebook } from '@mui/icons-material';

export const ModalShareBuktiTransfer = ({ open, onClose, image }) => {
  const handleShare = async (platform) => {
    const textToShare = 'Lihat bukti transfer ini!';

    if (platform === 'instagram') {
      window.open(
        `https://www.instagram.com/sharing-url?image=${encodeURIComponent(
          image
        )}&caption=${encodeURIComponent(textToShare)}`,
        '_blank'
      );
    } else if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          'Lihat bukti transfer ini!'
        )}&url=${encodeURIComponent(image)}`,
        '_blank'
      );
    } else if (platform === 'whatsapp') {
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(
          'Lihat bukti transfer: '
        )}%20${encodeURIComponent(image)}`,
        '_blank'
      );
    } else if (platform === 'facebook') {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          image
        )}`,
        '_blank'
      );
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: '500px',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#f7f9fc',
          color: '#333',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}
      >
        {/* Konten Modal */}
        <Box
          sx={{
            width: '100%',
            padding: '1rem 0',
            backgroundColor: '#0066AE',
            borderRadius: '12px',
            marginBottom: '1.5rem',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}
          >
            Bagikan Bukti Transfer
          </Typography>
        </Box>

        {/* Deskripsi */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'normal',
            color: '#555555',
            padding: '0 1.5rem',
            opacity: 0.9,
          }}
        >
          Bagikan bukti transfer ini kepada pihak yang membutuhkan melalui media
          sosial favorit Anda.
        </Typography>

        {image ? (
          <img
            src={image}
            alt="Bukti Transfer"
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              marginTop: '1.5rem',
            }}
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            Memuat bukti transfer...
          </Typography>
        )}

        {/* Ikon Media Sosial */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={() => handleShare('instagram')}
            sx={{
              color: '#E4405F',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              padding: '15px',
              '&:hover': {
                backgroundColor: '#E4405F',
                color: '#FFFFFF',
                transform: 'scale(1.15)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              },
            }}
          >
            <Instagram sx={{ fontSize: '32px' }} />
          </IconButton>
          <IconButton
            onClick={() => handleShare('twitter')}
            sx={{
              color: '#1DA1F2',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              padding: '15px',
              '&:hover': {
                backgroundColor: '#1DA1F2',
                color: '#FFFFFF',
                transform: 'scale(1.15)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              },
            }}
          >
            <Twitter sx={{ fontSize: '32px' }} />
          </IconButton>
          <IconButton
            onClick={() => handleShare('whatsapp')}
            sx={{
              color: '#25D366',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              padding: '15px',
              '&:hover': {
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                transform: 'scale(1.15)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              },
            }}
          >
            <WhatsApp sx={{ fontSize: '32px' }} />
          </IconButton>
          <IconButton
            onClick={() => handleShare('facebook')}
            sx={{
              color: '#1877F2',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              padding: '15px',
              '&:hover': {
                backgroundColor: '#1877F2',
                color: '#FFFFFF',
                transform: 'scale(1.15)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
              },
            }}
          >
            <Facebook sx={{ fontSize: '32px' }} />
          </IconButton>
        </Box>

        {/* Catatan */}
        <Typography
          variant="caption"
          sx={{
            color: '#777777',
            marginTop: '1.5rem',
            fontStyle: 'italic',
          }}
        >
          * Pastikan untuk membagikan bukti transfer ini hanya kepada pihak yang
          berwenang.
        </Typography>
      </Card>
    </Modal>
  );
};

ModalShareBuktiTransfer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
