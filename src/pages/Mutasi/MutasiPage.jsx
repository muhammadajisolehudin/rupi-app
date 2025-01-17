import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Grid,
  TableRow,
  TableCell,
  Pagination, // Import Pagination component
  Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import { Layout } from '../layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TransactionIcon from '../../assets/img/icons/transaction-mini-icon.svg';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShareIcon from '@mui/icons-material/Share';
import TablePrimary from '../../assets/components/tableComponents/TablePrimary';
import ModalBuktiTransfer from '../../assets/components/Modals/ModalBuktiTransfer';
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';
import { useGetMutations } from '../../services/account/account-mutasi';
import { formatDate, formatDateRange, formatRupiah, hideAccountNumber } from '../../utils/utilities';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { useGetMutationDetail } from '../../services/account/account-mutation-detail';
import { useDownloadBuktiMutasi } from '../../services/download/download-bukti-mutasi';
import { useDownloadEstatment } from '../../services/download/download-e-statment';
import ModalBuktiTransaksiQris from '../../assets/components/Modals/ModalBuktiTransaksiQris';
import { useAuthContext } from '../../context/AuthContext';
import { ModalShareBuktiTransfer } from '../../assets/components/Modals/ModalShareBuktiTransfer';
import { useShareBuktiMutasi } from '../../services/download/share-bukti-mutasi';

export const MutasiPage = () => {
  const { account } = useAuthContext();
  const [dateRange, setDateRange] = useState([null, null]);
  const [category, setCategory] = useState('');
  const [searchData, setSearchData] = useState('');
  const [selectedMutationId, setSelectedMutationId] = useState(null);
  const [selectedShareMutationId, setSelectedShareMutationId] = useState(null);

  const [image, setImage] = useState('');

  // Pagination state
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const [params, setParams] = useState({
    page: page,
    size: rowsPerPage,
  });

  const { data: dataMutasi } = useGetMutations(params);
  const { data: detailMutasi } = useGetMutationDetail(selectedMutationId);
  const { data: shareBuktiMutasi } = useShareBuktiMutasi({
    id: selectedShareMutationId,
    outputType: 'jpeg',
  });

  //localhost:9000/api/v1/mutations/1/pdf
  const { data: downloadBuktiMutasi } = useDownloadBuktiMutasi({
    id: selectedMutationId,
    outputType: 'pdf',
  });
  const { data: downloadEstatment } = useDownloadEstatment();

  useEffect(() => {
    const { start, end } = formatDateRange(dateRange);
    setParams((prevParams) => {
      const newParams = {
        ...prevParams,
        page: page - 1,
        size: rowsPerPage,
        startDate: start,
        endDate: end,
        category: category,
        search: searchData,
      };

      if (category) {
        newParams.mutationType = category;
      }

      return newParams;
    });
  }, [page, category, searchData, dateRange]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  let MutationType = null;

  if (dataMutasi?.content?.length > 0) {
    const filteredData = dataMutasi?.content?.filter(
      (data) => data?.id === selectedMutationId
    );

    if (filteredData?.length > 0) {
      MutationType = filteredData[0]?.mutation_type;
      console.log('detail mutation type: ', MutationType);
    }
  }

  const handleOpenBuktiTransfer = (buktiTransfer) => {
    setSelectedMutationId(buktiTransfer);
  };

  const handleDownload = () => {
    // setSelectedMutationId(id)
    // Buat URL dari blob data
    const url = URL.createObjectURL(downloadBuktiMutasi);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bukti-mutasi.pdf';
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleDownloadEstatment = () => {
    const url = URL.createObjectURL(downloadEstatment);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'print-e-statment.pdf';
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchData(event.target.value);
  };

  useEffect(() => {
    if (shareBuktiMutasi) {
      const url = shareBuktiMutasi.data.secure_url;
      setImage(url);
    }
  }, [shareBuktiMutasi]);

  const handleShare = (id) => {
    setSelectedShareMutationId(id);
  };

  return (
    <Layout>
      <Box sx={{ mx: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        <Breadcrumb />
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={4} md={5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: 56,
                borderRadius: 1,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <TextField
                variant="standard"
                placeholder="Cari transaksi apa?"
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                  ),
                  sx: {
                    width: '100%',
                    height: '100%',
                  },
                }}
                sx={{
                  width: '100%',
                  height: '100%',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  '& .MuiInput-underline:before': {
                    borderBottom: 'none', // Menghilangkan underline default
                  },
                  '& .MuiInput-underline:hover:before': {
                    border: 'none', // Menghilangkan underline saat hover
                  },
                }}
              />
            </Box>
          </Grid>

          {/* Date Picker */}
          <Grid item xs={12} sm={4} md={3}>
            <Grid container spacing={2} alignItems="center">
              {/* Rentang Tanggal */}
              <Grid item xs={12}>
                <Box sx={{ width: '100%', height: 56 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker
                      startText="Mulai"
                      endText="Akhir"
                      value={dateRange}
                      onChange={(newValue) => setDateRange(newValue)}
                      renderInput={(startProps, endProps) => (
                        <Box Box sx={{ bgcolor: 'red' }}>
                          <TextField
                            {...startProps}
                            sx={{
                              width: '100%',
                            }}
                          />
                          <TextField
                            {...endProps}
                            sx={{
                              width: '100%',
                            }}
                          />
                        </Box>
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Transaction Category */}
          <Grid item xs={12} sm={4} md={2}>
            <FormControl sx={{ height: '100%', width: '100%' }}>
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Kategori Transaksi' }}
                sx={{
                  bgcolor: 'neutral.100',
                  borderRadius: 2,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  width: '100%',
                  height: 56,
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem value="">Kategori Transaksi</MenuItem>
                <MenuItem value="CREDIT">Pemasukan</MenuItem>
                <MenuItem value="DEBIT">Pengeluaran</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Download E-Statement */}
          <Grid item xs={12} sm={4} md={2}>
            <Button
              onClick={() => {
                handleDownloadEstatment();
              }}
              startIcon={<DownloadIcon />}
              sx={{
                bgcolor: 'neutral.100',
                color: 'primary.main',
                borderRadius: 2,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 56,
              }}
              aria-label="Download E-statement mutasi rekening"
            >
              Download E-Statement
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 5 }}>
          <TablePrimary
            title="Mutasi Rekening"
            rows={['Transaksi', 'Tanggal', 'Nominal', 'Aksi']}
          >
            {dataMutasi?.content.map((data) => (
              <TableRow key={data?.id}>
                <TableCell>
                  <Grid
                    container
                    sx={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'center',
                      minWidth: '20rem',
                    }}
                  >
                    <Grid
                      item
                      xs={1.5}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        p: 0,
                        m: 0,
                      }}
                    >
                      <img
                        src={TransactionIcon}
                        alt="icon transaksi"
                        height={24}
                        width="auto"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10.5}
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <Typography variant="caption">
                        {data.mutation_type}
                      </Typography>
                      <Typography variant="caption">
                        {data.bank_name}
                      </Typography>
                      <Typography variant="caption">
                        {data.full_name}
                      </Typography>
                      <Typography variant="caption">
                        {data.account_number}
                      </Typography>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="caption">
                      {formatDate(data?.date)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#B3B3B3' }}>
                      {' '}
                      {data?.time}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color:
                        data.transaction_type === 'DEBIT'
                          ? '#CB3A31'
                          : '#12D79C',
                    }}
                  >
                    {data.transaction_type === 'DEBIT' ? '-' : '+'} Rp.
                    {formatRupiah(data?.amount)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="standar"
                    startIcon={<ReceiptIcon />}
                    onClick={() => {
                      handleOpenBuktiTransfer(data?.id);
                    }}
                    sx={{
                      mx: 1,
                      p: 1,
                      px: 2,
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      borderRadius: 3,
                      color: 'primary.main',
                      textTransform: 'none',
                    }}
                    aria-label="Lihat bukti transaksi"
                  >
                    Lihat Bukti
                  </Button>
                  {/* </Paper> */}
                  <Button
                    variant="standar"
                    startIcon={<ShareIcon />}
                    onClick={() => {
                      handleShare(data?.id);
                    }}
                    sx={{
                      mx: 1,
                      p: 1,
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      borderRadius: 3,
                      color: 'primary.main',
                      textTransform: 'none',
                    }}
                    aria-label="Bagikan bukti transaksi"
                  >
                    Bagikan Resi
                  </Button>

                  <Button
                    variant="standar"
                    startIcon={<DownloadIcon />}
                    onClick={() => {
                      handleDownload();
                    }}
                    sx={{
                      mx: 1,
                      p: 1,
                      px: 2,
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      borderRadius: 3,
                      color: 'primary.main',
                      textTransform: 'none',
                    }}
                    aria-label="Download bukti transaksi"
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TablePrimary>
        </Box>

        {/* Pagination */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 4,
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mr: 2 }}>
            {`Halaman ${page} dari ${dataMutasi?.total_pages}`}
          </Typography>
          <Pagination
            count={dataMutasi?.total_pages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>

      <ModalShareBuktiTransfer
        open={!!selectedShareMutationId}
        onClose={() => setSelectedShareMutationId(false)}
        image={image}
      />

      {MutationType == 'TRANSFER' || MutationType == 'QR' ? (
        <>
          <ModalBuktiTransfer
            open={!!selectedMutationId}
            onClose={() => setSelectedMutationId(null)}
            appName="Rupi App"
            status={
              dataMutasi?.content.find(
                (data) => data?.id === selectedMutationId
              )?.transaction_type === 'CREDIT'
                ? 'Bukti Terima Transfer'
                : 'Transfer Berhasil'
            }
            recipientName={detailMutasi?.receiver_detail?.name}
            bankName="Rupi Bank"
            // bankName={detailMutasi.receiver_detail.bank_name}
            accountNumber={detailMutasi?.receiver_detail.account_number}
            transferAmount={detailMutasi?.mutation_detail.amount}
            transferMethod={detailMutasi?.transaction_purpose}
            transferFee="0"
            totalTransaction={detailMutasi?.mutation_detail.amount}
            senderName={detailMutasi?.sender_detail.name}
            senderBankName="Rupi Bank"
            senderAccountSuffix={
              dataMutasi?.content.find(
                (data) => data?.id === selectedMutationId
              )?.transaction_type === 'CREDIT'
                ? detailMutasi?.sender_detail.account_number
                : hideAccountNumber(detailMutasi?.sender_detail.account_number)
            }
            // onShare={handleShare}
            onDownload={handleDownload}
          />
        </>
      ) : (
        <>
          <ModalBuktiTransaksiQris
            open={selectedMutationId}
            onClose={() => setSelectedMutationId(null)}
            appName="Rupi App"
            status="Transfer Berhasil"
            recipientName={detailMutasi?.merchant}
            bankName="Id Transaksi"
            accountNumber={selectedMutationId}
            transferAmount={detailMutasi?.amount}
            transferFee="0"
            totalTransaction={detailMutasi?.amount}
            senderName={account?.full_name}
            senderBankName="Rupi App"
            senderAccountSuffix={hideAccountNumber(account?.account_number)}
            // onShare={handleShare}
            onDownload={handleDownload}
          />
        </>
      )}
    </Layout>
  );
};
