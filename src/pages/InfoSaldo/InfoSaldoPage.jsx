import BreadcrumbSecondary from '../../assets/components/Breadcrumbs/BreadcrumbSecondary';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
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
import { ModalInfoSaldo } from '../../assets/components/Modals/ModalInfoSaldo';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import WalletIcon from '@mui/icons-material/Wallet';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useAuthContext } from '../../context/AuthContext';
import { MonthNavigator } from '../../assets/components/navigators/MonthNavigator';
import { formatGroupedData, groupByDate, parsePercentage } from '../../utils/utilities';
import FailAlert from '../../assets/components/Alerts/FailAlert';
import { useTransferRupiahContext } from '../../context/TransferRupiahContext';
import { LayoutSecondary } from '../layoutSecondary';
export const InfoSaldoPage = () => {
  const [open, setOpen] = useState({
    modalInfoSaldo: false,
    modalBuktiTransfer: false,
  });
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [activeSection, setActiveSection] = useState('Pemasukan');
  const [type, setType] = useState('debit');
  const [icon, setIcon] = useState('');
  const [selectedMonth, setSelectedMonth] = useState({
    month: ('0' + (new Date().getMonth() + 1)).slice(-2),
    year: new Date().getFullYear()
  })
  const { account } = useAuthContext();
  const { dataExpense, dataIncome, errorMutationSummary, setOptions } = useTransferRupiahContext();

  // setOptions({ month: selectedMonth.month, year: selectedMonth.year });
  useEffect(() => {
    console.log("Setting options with:", { month: selectedMonth.month, year: selectedMonth.year });
    setOptions({ month: selectedMonth.month, year: selectedMonth.year });
  }, [selectedMonth]); // Dependensi diperbaiki di sini

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

  const transferIncomeCategory = dataIncome?.categories.find(category => category.type === 'TRANSFER');
  const qrCategory = dataIncome?.categories.find(category => category.type === 'QRIS');
  const setorCategory = dataIncome?.categories.find(category => category.type === 'SETOR');

  const transferExpenseCategory = dataExpense?.categories.find(category => category.type === 'TRANSFER');
  const qrisCategory = dataExpense?.categories.find(category => category.type === 'QRIS');
  const tarikCategory = dataExpense?.categories.find(category => category.type === 'SETOR');

  const chartDataPemasukan = (dataIncome?.categories || []).map((category, index) => ({
    value: parsePercentage(category.total_balance_percentage),
    color: ['#0ed79c', '#0065ae', '#feb831'][index] || '#cccccc', // Warna default jika index lebih dari jumlah warna
  }));

  const chartDataPengeluaran = (dataExpense?.categories || []).map((category, index) => ({
    value: parsePercentage(category.total_balance_percentage),
    color: ['#ca3a31', '#0a3967', '#926001'][index] || '#cccccc', // Warna default jika index lebih dari jumlah warna
  }));

  const groupedDataTransferExpense = groupByDate(transferExpenseCategory?.mutations);
  const groupedDataTransferIncome = groupByDate(transferIncomeCategory?.mutations);

  const dataTransferExpense = formatGroupedData(groupedDataTransferExpense)
  const dataTransferIncome = formatGroupedData(groupedDataTransferIncome)

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
    <LayoutSecondary>
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
            top: '200px',
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
              {/* <MonthNavigator /> */}
              <MonthNavigator onMonthChange={(date) => {
                const formattedDate = {
                  month: ('0' + (date.getMonth() + 1)).slice(-2),
                  year: date.getFullYear()
                };
                setSelectedMonth(formattedDate);
              }} />
            </Box>

            <Box sx={{ bgcolor: 'neutral.01', boxShadow: 3 }}>
              <Grid
                container
                // justifyContent="center"
                spacing={1}
                sx={{ px: 2, pt: 5, mb: 0, pb: 0 }}
              >
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                        cursor: 'pointer',
                      }}
                    >
                      Pemasukan
                    </Typography>
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                    borderTop: 4,
                    borderColor:
                      activeSection === 'Pemasukan' ? '#0066AE' : '#dedede',
                    py: 1,
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderTop: 4,
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
                  gap: 1,
                  p: 2,
                }}
              >
                {activeSection === 'Pemasukan' ? (
                  <>
                    <TransactionBox
                      icon={TransferIcon}
                      title="Transfer"
                      data={transferIncomeCategory}
                      onClick={() =>
                        handleOpen(
                          dataTransferIncome,
                          'Transfer',
                          'credit',
                          <WalletIcon />
                        )
                      }
                    />
                    <TransactionBox
                      icon={BarcodeIcon}
                      title="QR Terima Transfer"
                      data={qrCategory}
                      onClick={() =>
                        handleOpen(
                          dataQrTerimaTransfer,
                          'QR Terima Transfer',
                          'credit',
                          <QrCodeIcon />
                        )
                      }
                    />
                    <TransactionBox
                      icon={SetorTunaiIcon}
                      title="Setor Tunai"
                      data={setorCategory}
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
                      data={transferExpenseCategory}
                      onClick={() =>
                        handleOpen(
                          dataTransferExpense,
                          'Transfer Pengeluaran',
                          'debit',
                          <WalletIcon />
                        )
                      }
                    />
                    <TransactionBox
                      icon={QrisIcon}
                      title="QRIS"
                      data={qrisCategory}
                      onClick={() =>
                        handleOpen(
                          datQris,
                          'QRIS Pembayaran',
                          'debit',
                          <QrCode2Icon />
                        )
                      }
                    />
                    <TransactionBox
                      icon={TarikTunaiIcon}
                      title="Tarik Tunai"
                      data={tarikCategory}
                      onClick={() =>
                        handleOpen(
                          dataTarikTunai,
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
              data={{
                activeSection: activeSection === 'Pemasukan' ? chartDataPemasukan : chartDataPengeluaran,
                data: activeSection === 'Pemasukan' ? dataIncome : dataExpense
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
              rows={['Transaksi', 'Tanggal', 'Keterangan', 'Nominal']}
              data={[
                {
                  Transaksi: '',
                  Tanggal: '12 Juli 2024',
                  Keterangan: 'Transfer',
                  Nominal: 'Rp 1.000.000',
                },
                {
                  Transaksi: '',
                  Tanggal: '12 Juli 2024',
                  Keterangan: 'Pembayaran',
                  Nominal: 'Rp 1.000.000',
                },
                {
                  Transaksi: '',
                  Tanggal: '12 Juli 2024',
                  Keterangan: 'Setor Tunai',
                  Nominal: 'Rp 1.000.000',
                },
              ]}
              actions={[
                {
                  handler: () => { },
                  label: 'Lihat Bukti',
                  icon: <ReceiptIcon />,
                },
                {
                  handler: () => { },
                  label: 'Bagikan Resi',
                  icon: <ShareIcon />,
                },
                {
                  handler: () => { },
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

      {errorMutationSummary && (
        <FailAlert message={errorMutationSummary?.response?.data?.message || errorMutationSummary?.message} title="Gagal mengambil data" />
      )}
    </LayoutSecondary>


  );
};
