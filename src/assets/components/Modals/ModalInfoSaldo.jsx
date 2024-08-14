import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Modal,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';

export const ModalInfoSaldo = ({
  open,
  onClose,
  transactions,
  title,
  type,
  icon,
}) => {
  const error = red[500];
  const success = green[500];
  console.log("ini data : ", transactions)
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          maxWidth: 500,
          bgcolor: 'background.paper',
          inset: 0,
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          mx: 'auto',
          mt: 15,
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            maxHeight: '60vh',
            overflowY: 'auto',
          }}
        >
          <List>
            {transactions?.map((transaction, index) => (
              <Box key={index}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ mt: 2, mb: 1 }}
                >
                  {transaction.date}
                </Typography>
                <Divider />
                {transaction?.transactions.map((detail, idx) => (
                  <ListItem key={idx} sx={{ py: 1 }}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      // primary={detail.title}
                      secondary={
                        <>
                          <Typography variant="body2" color="textSecondary">
                            {/* {detail.from} */}BCA
                            <br />
                            {detail.full_name}
                            <br />
                            {detail.account_number}
                          </Typography>
                        </>
                      }
                    />
                    <Typography
                      variant="body2"
                      color={type === 'debit' ? error : success}
                      fontWeight="bold"
                    >
                      {type === 'debit' ? '-' : '+'}{detail.amount}
                    </Typography>
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

ModalInfoSaldo.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          from: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          account: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(['debit', 'credit']),
  icon: PropTypes.node.isRequired,
};
