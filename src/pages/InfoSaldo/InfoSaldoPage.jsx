import BreadcrumbSecondary from '../../assets/components/Breadcrumbs/BreadcrumbSecondary';
import NavbarSecondary from '../../assets/components/layoutsComponents/navbarSecondary';
import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonBase,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import CardSaldo from '../../assets/components/Cards/CardSaldo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
import ModalBuktiTransfer from '../../assets/components/Modals/ModalBuktiTransfer';
export const InfoSaldoPage = () => {
  const [open, setOpen] = useState({
    modalInfoSaldo: false,
    modalBuktiTransfer: false,
  });
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [activeSection, setActiveSection] = useState('Pemasukan');
  const [transferData, setTransferData] = useState({
    recipientName: 'John Doe',
    bankName: 'Bank ABC',
    accountNumber: '1234567890',
    transferAmount: 'Rp 1.000.000',
    transferMethod: 'Online Banking',
    transferFee: 'Rp 5.000',
    totalTransaction: 'Rp 1.005.000',
    senderName: 'SAMSUL',
    senderBankName: 'Bank XYZ',
    senderAccountSuffix: '7890',
  });
  const [infoSaldo, setInfoSaldo] = useState({
    title: '',
    type: '',
    icon: '',
  });

  const handleOpenInfoSaldo = (transactionData, infoSaldo) => {
    setSelectedTransaction(transactionData);
    setOpen({
      modalInfoSaldo: true,
      modalBuktiTransfer: false,
    });
    setInfoSaldo(infoSaldo);
  };

  const handleCloseInfoSaldo = () => {
    setOpen({
      modalInfoSaldo: false,
      modalBuktiTransfer: false,
    });
    setSelectedTransaction([]);
  };

  const handleOpenBuktiTransfer = (buktiTransfer) => {
    setOpen({
      modalInfoSaldo: false,
      modalBuktiTransfer: true,
    });

    setTransferData(buktiTransfer);
  };

  const handleCloseBuktiTransfer = () => {
    setOpen({
      modalInfoSaldo: false,
      modalBuktiTransfer: false,
    });
  };

  const handleShare = () => {
    console.log('Share');
  };

  const handleDownload = () => {
    console.log('Download');
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
    { value: 5, label: 'A', color: '#0ed79c' },
    { value: 10, label: 'B', color: '#0065ae' },
    { value: 15, label: 'C', color: '#feb831' },
  ];

  const chartDataPengeluaran = [
    { value: 8, label: 'E', color: '#ca3a31' },
    { value: 12, label: 'F', color: '#0a3967' },
    { value: 6, label: 'G', color: '#926001' },
  ];

  const dataTable = [
    {
      id: 1,
      tanggal: '12 Juli 2024',
      keterangan: 'Transfer dari BCA ke BNI',
      nominal: 'Rp 1.000.000',
    },
    {
      id: 2,
      tanggal: '12 Juli 2024',
      keterangan: 'Transfer dari BCA ke BNI',
      nominal: 'Rp 1.000.000',
    },
    {
      id: 3,
      tanggal: '12 Juli 2024',
      keterangan: 'Transfer dari BCA ke BNI',
      nominal: 'Rp 1.000.000',
    },
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
              <CardSaldo />
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
                  <IconButton size="small" sx={{ color: 'white' }}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                      lineHeight: '24px',
                    }}
                  >
                    Juli 2024
                  </Typography>
                  <IconButton size="small" sx={{ color: 'white' }}>
                    <ChevronRightIcon />
                  </IconButton>
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
                            handleOpenInfoSaldo(dataTransfer, {
                              title: 'Transfer',
                              type: 'credit',
                              icon: <WalletIcon />,
                            })
                          }
                        />
                        <TransactionBox
                          icon={BarcodeIcon}
                          title="Pembayaran"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpenInfoSaldo(dataPembayaran, {
                              title: 'Pembayaran',
                              type: 'credit',
                              icon: <QrCodeIcon />,
                            })
                          }
                        />
                        <TransactionBox
                          icon={SetorTunaiIcon}
                          title="Setor Tunai"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpenInfoSaldo(dataSetorTunai, {
                              title: 'Setor Tunai',
                              type: 'credit',
                              icon: <CreditCardIcon />,
                            })
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
                            handleOpenInfoSaldo(dataTransfer, {
                              title: 'Transfer',
                              type: 'debit',
                              icon: <WalletIcon />,
                            })
                          }
                        />
                        <TransactionBox
                          icon={QrisIcon}
                          title="QRIS"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpenInfoSaldo(dataPembayaran, {
                              title: 'QRIS',
                              type: 'debit',
                              icon: <QrCode2Icon />,
                            })
                          }
                        />
                        <TransactionBox
                          icon={TarikTunaiIcon}
                          title="Tarik Tunai"
                          amount="Rp 1.000.000"
                          amountDetail="Detail"
                          onClick={() =>
                            handleOpenInfoSaldo(dataSetorTunai, {
                              title: 'Tarik Tunai',
                              type: 'debit',
                              icon: <CreditCardIcon />,
                            })
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
                  data={
                    activeSection === 'Pemasukan'
                      ? chartDataPemasukan
                      : chartDataPengeluaran
                  }
                  centerLabel="Total"
                  width={400}
                  height={400}
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
                  rows={['Tanggal', 'Keterangan', 'Nominal', 'Aksi']}
                >
                  {dataTable.map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.tanggal}</TableCell>
                      <TableCell>{data.keterangan}</TableCell>
                      <TableCell>{data.nominal}</TableCell>
                      <TableCell>
                        <Button
                          key={data.id}
                          variant="outlined"
                          startIcon={<ReceiptIcon />}
                          onClick={() => {
                            handleOpenBuktiTransfer({
                              recipientName: 'John Doe',
                              bankName: 'Bank ABC',
                              accountNumber: '1234567890',
                              transferAmount: 'Rp 1.000.000',
                              transferMethod: 'Online Banking',
                              transferFee: 'Rp 5.000',
                              totalTransaction: 'Rp 1.005.000',
                              senderName: 'SAMSUL',
                              senderBankName: 'Bank XYZ',
                              senderAccountSuffix: '7890',
                            });
                          }}
                          style={{ margin: '0 4px' }}
                        >
                          Lihat Bukti
                        </Button>
                        <Button
                          key={data.id}
                          variant="outlined"
                          startIcon={<DownloadIcon />}
                          onClick={() => {}}
                          style={{ margin: '0 4px' }}
                        >
                          Download
                        </Button>
                        <Button
                          key={data.id}
                          variant="outlined"
                          startIcon={<ShareIcon />}
                          onClick={() => {}}
                          style={{ margin: '0 4px' }}
                        >
                          Bagikan
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TablePrimary>
              </Box>
            </Box>
          </Container>
          <ModalInfoSaldo
            open={open.modalInfoSaldo}
            onClose={handleCloseInfoSaldo}
            transactions={selectedTransaction}
            title={infoSaldo.title}
            type={infoSaldo.type}
            icon={infoSaldo.icon}
          />
          <ModalBuktiTransfer
            open={open.modalBuktiTransfer}
            onClose={handleCloseBuktiTransfer}
            appName={transferData.appName}
            status={transferData.status}
            recipientName={transferData.recipientName}
            bankName={transferData.bankName}
            accountNumber={transferData.accountNumber}
            transferAmount={transferData.transferAmount}
            transferMethod={transferData.transferMethod}
            transferFee={transferData.transferFee}
            totalTransaction={transferData.totalTransaction}
            senderName={transferData.senderName}
            senderBankName={transferData.senderBankName}
            senderAccountSuffix={transferData.senderAccountSuffix}
            onShare={handleShare}
            onDownload={handleDownload}
          />

          <Footer />
        </Grid>
      </CssBaseline>
    </React.Fragment>
  );
};
