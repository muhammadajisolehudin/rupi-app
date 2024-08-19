import {
  Box,
  Typography,
  Divider,
  IconButton,
  Grid,
  Modal,
  Button,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
  width: 400,
};

export const ModalBuktiTransfer = ({
  open,
  onClose,
  appName = 'Rupi App',
  status = 'Transfer Berhasil',
  recipientName,
  bankName,
  accountNumber,
  transferAmount,
  transferMethod,
  transferFee,
  totalTransaction,
  senderName,
  senderBankName,
  senderAccountSuffix,
  onShare,
  onDownload,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/logo.png"
                alt="Element"
                style={{ width: 40, height: 40, marginRight: 8 }}
              />
              <Typography variant="h6">{appName}</Typography>
            </Box>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" align="center" sx={{ mt: 1 }}>
            {status}
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Penerima</Typography>
            <Typography variant="body1">{recipientName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {bankName} - {accountNumber}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Rincian Transfer</Typography>
            <Grid container justifyContent="space-between">
              <Typography variant="body2">Nominal Transfer</Typography>
              <Typography variant="body2">{transferAmount}</Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography variant="body2">Metode Transfer</Typography>
              <Typography variant="body2">{transferMethod}</Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography variant="body2">Biaya Transfer</Typography>
              <Typography variant="body2">{transferFee}</Typography>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Grid container justifyContent="space-between">
              <Typography variant="body2">Total Transaksi</Typography>
              <Typography variant="body2">{totalTransaction}</Typography>
            </Grid>
            <Divider sx={{ my: 2 }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Rekening Sumber</Typography>
            <Typography variant="body1">{senderName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {senderBankName} - <span>• • • •</span> {senderAccountSuffix}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              startIcon={<ShareIcon />}
              onClick={onShare}
              variant="outlined"
            >
              Bagikan Resi
            </Button>
            <Button
              startIcon={<DownloadIcon />}
              onClick={onDownload}
              variant="outlined"
            >
              Download
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

ModalBuktiTransfer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  appName: PropTypes.string,
  status: PropTypes.string,
  recipientName: PropTypes.string,
  bankName: PropTypes.string,
  accountNumber: PropTypes.string,
  transferAmount: PropTypes.string,
  transferMethod: PropTypes.string,
  transferFee: PropTypes.string,
  totalTransaction: PropTypes.string,
  senderName: PropTypes.string,
  senderBankName: PropTypes.string,
  senderAccountSuffix: PropTypes.string,
  onShare: PropTypes.func,
  onDownload: PropTypes.func,
};

export default ModalBuktiTransfer;
