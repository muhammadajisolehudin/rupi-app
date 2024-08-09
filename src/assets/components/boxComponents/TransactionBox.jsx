import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonBase } from '@mui/material';

const TransactionBox = ({ icon, title, amount, amountDetail, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          py: 2,
          gap: 4,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <img src={icon} alt="icon" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body1">{amount}</Typography>
          </Box>
        </Box>

        <ButtonBase onClick={onClick}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
            }}
          >
            <Typography variant="body1" sx={{ color: '#0066AE' }}>
              {amountDetail}
            </Typography>
            <ChevronRightIcon sx={{ color: '#0066AE' }} />
          </Box>
        </ButtonBase>
      </Box>
    </Box>
  );
};

TransactionBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  amountDetail: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TransactionBox;
