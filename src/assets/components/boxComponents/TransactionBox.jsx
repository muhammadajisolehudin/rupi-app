import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonBase, Grid } from '@mui/material';
import { parsePercentage } from '../../../utils/utilities';

const TransactionBox = ({ icon, title, data, onClick }) => {
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
            }}
          >
            <Grid item xs={8} sx={{ display:"flex", flexDirection: "column", justifyContent:"space-between" }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
              <Typography variant="body1"> { data?.number_of_transactions || 0 } transaksi ({ parsePercentage(data?.total_balance_percentage) }%)</Typography>
              </Grid>
            <Grid item xs={4} sx={{ display:"flex", alignItems: "center" }}>
              <Typography variant="body1">{data?.total_balance || 0}</Typography>
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
  data: PropTypes.string.isRequired,
  amountDetail: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TransactionBox;
