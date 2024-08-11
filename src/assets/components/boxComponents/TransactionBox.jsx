import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonBase, Grid } from '@mui/material';

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
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, width: "100%", }}>
          <img src={icon} alt="icon" />
          <Grid
            container
            sx={{
              display: 'flex',
              width:"100%",
              bgcolor:"red"
            }}
          >
            <Grid item xs={8}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
                <Typography variant="body1">{amount}</Typography>
              </Grid>
            <Grid item xs={4} sx={{ bgcolor:"green", display:"flex", ju }}>
              <Typography variant="body1">{amount}</Typography>
            </Grid>
            
           
          </Grid>
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
