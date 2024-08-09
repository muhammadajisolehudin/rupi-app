import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const TablePrimary = ({ title, rows, data, actions }) => {
  return (
    <Paper style={{ width: '100%', overflowX: 'auto' }}>
      <Typography variant="h6" component="div" style={{ padding: '16px' }}>
        {title}
      </Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {rows.map((row, index) => (
                <TableCell key={index}>{row}</TableCell>
              ))}
              {actions.length > 0 && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {rows.map((row, index) => (
                  <TableCell key={index}>{item[row]}</TableCell>
                ))}
                {actions.length > 0 && (
                  <TableCell>
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        startIcon={action.icon}
                        onClick={() => action.handler(item)}
                        style={{ margin: '0 4px' }}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

TablePrimary.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      handler: PropTypes.func.isRequired,
    })
  ),
};

export default TablePrimary;
