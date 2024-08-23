import {
  Box,
  Typography,
  Divider,
  IconButton,
  Grid,
  Modal,
  Button,
  Paper,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '56%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  pb: 2,
  maxWidth: '100%',
  width: "22rem",
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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "end", width: "100%", mb: -2, mt: 0, pt: 0 }}>
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: "100%", gap: 1 }}>
              <img
                src="/logo.png"
                alt="Element"
                style={{ width: 24, height: "auto" }}
              />
              <Typography variant="h6">{appName}</Typography>
            </Box>

          </Box>
          <Typography variant="subtitle1" align="center" sx={{ mt: 1, fontWeight:"bold" }}>
            {status}
          </Typography>
          <Divider sx={{ my: 2, borderColor: 'black' }} />

          <Box sx={{ mb: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography variant="subtitle2" sx={{ color: "#B3B3B3" }}>Penerima</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>{recipientName}</Typography>
            <Typography variant="caption" >
              {bankName} - {accountNumber}
            </Typography>
          </Box>
          <Divider sx={{ mt:1, mb:2}} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle2" sx={{ color: "#B3B3B3", mb: 1 }}>Rincian Transfer</Typography>
            <Box sx={{ mb: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Grid container justifyContent="space-between">
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>Nominal Transfer</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>{transferAmount}</Typography>
              </Grid>
              <Grid container justifyContent="space-between">
                <Typography variant="body2">Metode Transfer</Typography>
                <Typography variant="body2">{transferMethod}</Typography>
              </Grid>
              <Grid container justifyContent="space-between">
                <Typography variant="body2">Biaya Transfer</Typography>
                <Typography variant="body2">{transferFee}</Typography>
              </Grid>
            </Box>

            <Divider sx={{ my: 2, borderColor: 'black' }} />
            <Grid container justifyContent="space-between">
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>Total Transaksi</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>{totalTransaction}</Typography>
            </Grid>
            <Divider sx={{ my: 2, borderColor: 'black' }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: "#B3B3B3" }}>Rekening Sumber</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>{senderName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {senderBankName} - <span>• • • •</span> {senderAccountSuffix}
            </Typography>
          </Box>

          <Paper elevetion={6} sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, p: 1, borderRadius: 3 }}>
            <Button
              startIcon={<ShareIcon />}
              onClick={onShare}
            // variant="outlined"
            >
              Bagikan Resi
            </Button>
            <Button
              startIcon={<DownloadIcon />}
              onClick={onDownload}
            // variant="outlined"
            >
              Download
            </Button>
          </Paper>
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
