import React from 'react';
import PropTypes from 'prop-types';
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

// Import ikon
import BarcodeIcon from '../../img/icons/barcode-icon.png';
import QrisIcon from '../../img/icons/qris-pengeluaran-icon.png';
import TarikTunaiIcon from '../../img/icons/tarik-tunai-icon.png';
import TransferPengeuaranIcon from '../../img/icons/transfer-pengeluaran-icon.png';
import TransferIcon from '../../img/icons/transfer-icon.png';
import SetorTunaiIcon from '../../img/icons/setor-tunai-icon.png';

const TablePrimary = ({ title, rows, data, actions }) => {
  // Peta ikon berdasarkan jenis transaksi
  const iconMap = {
    Transfer: TransferIcon,
    Pembayaran: BarcodeIcon,
    'Setor Tunai': SetorTunaiIcon,
    'Tarik Tunai': TarikTunaiIcon,
    QRIS: QrisIcon,
    'Transfer Pengeluaran': TransferPengeuaranIcon,
  };

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
                <TableCell key={index} style={{ fontWeight: 'bold' }}>
                  {row}
                </TableCell>
              ))}
              {actions.length > 0 && <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {rows.map((row, index) => (
                  <TableCell key={index}>
                    {row === 'Transaksi' ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={iconMap[item[row]] || BarcodeIcon} // default icon if type not found
                          alt={item[row]}
                          style={{ width: 24, height: 24 }} // adjust size as needed
                        />
                      </div>
                    ) : (
                      item[row]
                    )}
                  </TableCell>
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
