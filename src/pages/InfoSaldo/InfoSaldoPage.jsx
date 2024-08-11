import BreadcrumbSecondary from '../../assets/components/Breadcrumbs/BreadcrumbSecondary';
import NavbarSecondary from '../../assets/components/layoutsComponents/navbarSecondary';
import React, { useState } from 'react';
import {
  Box,
  ButtonBase,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CardSaldo from '../../assets/components/Cards/CardSaldo';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

import BarcodeIcon from '../../assets/img/icons/barcode-icon.png';
import QrisIcon from '../../assets/img/icons/qris-pengeluaran-icon.png';
import TarikTunaiIcon from '../../assets/img/icons/tarik-tunai-icon.png';
import TransferPengeuaranIcon from '../../assets/img/icons/transfer-pengeluaran-icon.png';
import TransferIcon from '../../assets/img/icons/transfer-icon.png';
import SetorTunaiIcon from '../../assets/img/icons/setor-tunai-icon.png';
import TransactionBox from '../../assets/components/boxComponents/TransactionBox';
import DynamicPieChart from '../../assets/components/chartComponents/DynamicPieChart';
import ButtonPrimary from '../../assets/components/buttonComponents/PrimaryButton';
import TablePrimary from '../../assets/components/tableComponents/TablePrimary';
import Footer from '../../assets/components/layoutsComponents/Footer';
import { ModalInfoSaldo } from '../../assets/components/Modals/ModalInfoSaldo';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import WalletIcon from '@mui/icons-material/Wallet';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useAuthContext } from '../../context/AuthContext';
import { MonthNavigator } from '../../assets/components/navigators/MonthNavigator';
import { useGetMutationsSummary } from '../../services/account/account-mutations-summary';
export const InfoSaldoPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [title, setTitle] = useState('');
  const [activeSection, setActiveSection] = useState('Pemasukan');
  const [type, setType] = useState('debit');
  const [icon, setIcon] = useState('');

  //feching api
  const { account } = useAuthContext();
  const options = { params: { id: 123 } }; 
  const { data, error, isLoading } = useGetMutationsSummary(options);
  console.log("ini data mutasi summary : ", data?.income?.categories[0]?.total_balance_percentage)

  const handleOpen = (transactionData, title, type, icon) => {
    setSelectedTransaction(transactionData);
    setTitle(title);
    setType(type);
    setOpen(true);
    setIcon(icon);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTransaction([]);
  };

  const dataTransfer = [
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Transfer dari BCA ke BNI',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
        {
          title: 'Transfer dari BCA ke BNI',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Transfer dari BCA ke BNI',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '123456789',
        },
        {
          title: 'Transfer dari BCA ke BNI',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
  ];

  const dataPembayaran = [
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Pembayaran Listrik',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
        {
          title: 'Pembayaran Listrik',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Pembayaran Listrik',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
        {
          title: 'Pembayaran Listrik',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
  ];

  const dataSetorTunai = [
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Setor Tunai',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
        {
          title: 'Setor Tunai',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
    {
      date: '12 Juli 2024',
      details: [
        {
          title: 'Setor Tunai',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
        {
          title: 'Setor Tunai',
          amount: '1.000.000',
          from: 'BCA',
          name: 'BNI',
          account: '1234567890',
        },
      ],
    },
  ];

  const chartDataPemasukan = [
    { value: parseFloat(data?.income?.categories[0]?.total_balance_percentage?.toFixed(2)) || 0, color: '#0ed79c' },
    { value: parseFloat(data?.income?.categories[1]?.total_balance_percentage?.toFixed(2)) || 0, color: '#0065ae' },
    { value: parseFloat(data?.income?.categories[2]?.total_balance_percentage?.toFixed(2)) || 0, color: '#feb831' },
  ];

  const chartDataPengeluaran = [
    { value: 8, label: 'E', color: '#ca3a31' },
    { value: 12, label: 'F', color: '#0a3967' },
    { value: 6, label: 'G', color: '#926001' },
  ];

  return (
    <React.Fragment>
      <CssBaseline>
        <Grid container style={{ width: '100%', height: '100vh' }}>
          <NavbarSecondary />
          <Grid
            item
            xs={12}
            sx={{
              display: 'relative',
            }}
          >
            <BreadcrumbSecondary />
            <Box
              sx={{
                position: 'absolute',
                top: '170px',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CardSaldo account={account} />
            </Box>
          </Grid>
          <Container maxWidth="lg" sx={{ mx: 'auto', my: 5 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6} sx={{ mt: 15, mb: 2 }}>
                <Box
                  sx={{
                    height: 44,
                    backgroundColor: 'primary.main',
                    borderRadius: 1.25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 16px',
                    boxSizing: 'border-box',
                  }}
                >
                  <MonthNavigator />
                </Box>

                <Box sx={{ bgcolor: 'neutral.01', boxShadow: 3 }}>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    sx={{ px: 2, pt: 2 }}
                  >
                    <Grid item xs={6} sm={6} md={4}>
                      <ButtonBase onClick={() => setActiveSection('Pemasukan')}>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight:
                              activeSection === 'Pemasukan' ? 'bold' : 'normal',
                            color:
                              activeSection === 'Pemasukan'
                                ? '#0066AE'
                                : '#dedede',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          Pemasukan
                        </Typography>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <ButtonBase
                        onClick={() => setActiveSection('Pengeluaran')}
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight:
                              activeSection === 'Pengeluaran'
                                ? 'bold'
                                : 'normal',
                            color:
                              activeSection === 'Pengeluaran'
                                ? '#0066AE'
                                : '#dedede',
                            textAlign: 'center',
                            cursor: 'pointer',
                          }}
                        >
                          Pengeluaran
                        </Typography>
                      </ButtonBase>
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      display: 'grid',
                      rowGap: 1,
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        borderBottom: 4,
                        borderColor:
                          activeSection === 'Pemasukan' ? '#0066AE' : '#dedede',
                        py: 1,
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        borderBottom: 4,
                        borderColor:
                          activeSection === 'Pengeluaran'
                            ? '#0066AE'
                            : '#dedede',
                        py: 1,
                      }}
                    />
                  </Box>

                  {/* Transaction Box */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      p: 2,
                    }}
                  >
                    {activeSection === 'Pemasukan' ? (
                      <>
                        <TransactionBox
                          icon={TransferIcon}
                          title="Transfer"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataTransfer,
                              'Transfer',
                              'credit',
                              <WalletIcon />
                            )
                          }
                        />
                        <TransactionBox
                          icon={BarcodeIcon}
                          title="Pembayaran"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataPembayaran,
                              'Pembayaran',
                              'credit',
                              <QrCodeIcon />
                            )
                          }
                        />
                        <TransactionBox
                          icon={SetorTunaiIcon}
                          title="Setor Tunai"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataSetorTunai,
                              'Setor Tunai',
                              'credit',
                              <CreditCardIcon />
                            )
                          }
                        />
                      </>
                    ) : (
                      <>
                        <TransactionBox
                          icon={TransferPengeuaranIcon}
                          title="Transfer"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataTransfer,
                              'Transfer Pengeluaran',
                              'debit',
                              <WalletIcon />
                            )
                          }
                        />
                        <TransactionBox
                          icon={QrisIcon}
                          title="QRIS"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataPembayaran,
                              'QRIS Pembayaran',
                              'debit',
                              <QrCode2Icon />
                            )
                          }
                        />
                        <TransactionBox
                          icon={TarikTunaiIcon}
                          title="Tarik Tunai"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpen(
                              dataSetorTunai,
                              'Tarik Tunai',
                              'debit',
                              <CreditCardIcon />
                            )
                          }
                        />
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>

              {/* Chart */}
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  mt: 'auto',
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <DynamicPieChart
                  // data={
                  //   activeSection === 'Pemasukan'
                  //     ? chartDataPemasukan
                  //     : chartDataPengeluaran
                  // }
                  data={{
                    activeSection: activeSection === 'Pemasukan' ? chartDataPemasukan : chartDataPengeluaran,
                    data: activeSection === 'Pemasukan' ? data?.income : data?.expense
                  }}
                  centerLabel={
                    activeSection === 'Pemasukan'
                      ? "Total Pemasukan"
                      : "Total Pengeluaran"
                  }
                  // dataCart={data.income}
                  width={500}
                  height={500}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', mt: 5, flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}
              >
                <ButtonPrimary text="Lihat Mutasi Rekening" />
              </Box>

              <Box
                sx={{ display: 'flex', justifyContent: 'flex-start', mt: 5 }}
              >
                <TablePrimary
                  title="Aktivitas Terakhir"
                  rows={['Tanggal', 'Keterangan', 'Nominal']}
                  data={[
                    {
                      Tanggal: '12 Juli 2024',
                      Keterangan: 'Transfer',
                      Nominal: 'Rp 1.000.000',
                    },
                    {
                      Tanggal: '12 Juli 2024',
                      Keterangan: 'Pembayaran',
                      Nominal: 'Rp 1.000.000',
                    },
                    {
                      Tanggal: '12 Juli 2024',
                      Keterangan: 'Setor Tunai',
                      Nominal: 'Rp 1.000.000',
                    },
                  ]}
                  actions={[
                    {
                      handler: () => {},
                      label: 'Lihat Bukti',
                      icon: <ReceiptIcon />,
                    },
                    {
                      handler: () => {},
                      label: 'Bagikan Resi',
                      icon: <ShareIcon />,
                    },
                    {
                      handler: () => {},
                      label: 'Unduh Resi',
                      icon: <DownloadIcon />,
                    },
                  ]}
                />
              </Box>
            </Box>
          </Container>
          <ModalInfoSaldo
            open={open}
            onClose={handleClose}
            transactions={selectedTransaction}
            title={title}
            type={type}
            icon={icon}
          />
          <Footer />
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
};

// export default InfoSaldoPage;
