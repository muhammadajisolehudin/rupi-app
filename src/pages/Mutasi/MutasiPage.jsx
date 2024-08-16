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
  Typography, // Import Typography for the page info
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import { Layout } from '../layout';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShareIcon from '@mui/icons-material/Share';
import TablePrimary from '../../assets/components/tableComponents/TablePrimary';
import ModalBuktiTransfer from '../../assets/components/Modals/ModalBuktiTransfer';
import { Breadcrumb } from '../../assets/components/Breadcrumbs/Breadcrumb';
import { useGetMutations } from '../../services/account/account-mutasi';

export const MutasiPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState();

  // Pagination state
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Number of rows per page
  
  const [params, setParams] = useState({
    page: "",
    size: "",
    year:"",
    month: "",
    // transactionPurpose: "",
    // transactionType: "",
    // mutationType: ""
  });
  const { data: dataMutasi } = useGetMutations(params)

  useEffect( () => {
    
    setParams(prevParams => {
      const newParams = {
        ...prevParams,
        page: page - 1, // Adjust page number as needed
        size: rowsPerPage, // Ensure rowsPerPage is defined somewhere
        year: selectedDate ? selectedDate.year() : '',
        month: selectedDate ? selectedDate.month() + 1 : '',
      };

      if (category) {
        newParams.mutationType = category;
      }

      return newParams;
    });

  }, [page, category, selectedDate ])

  console.log("data mutasi",dataMutasi)
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

  // Calculate pagination details
  // const totalPages = Math.ceil(dataMutasi?.length / rowsPerPage);
  const totalPages = Math.ceil((dataMutasi?.length || 0) / rowsPerPage);
  const dataMutasiArray = Array.isArray(dataMutasi) ? dataMutasi : [];
  const paginatedData = dataMutasiArray?.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpenBuktiTransfer = (buktiTransfer) => {
    setOpen(true);
    setTransferData(buktiTransfer);
  };

  const handleCloseBuktiTransfer = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleShare = () => {
    console.log('Share');
  };

  const handleDownload = () => {
    console.log('Download');
  };

  return (
    <Layout>
      <Box sx={{ mx: 6, paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        <Breadcrumb />
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={4} md={6}>
            <TextField
              placeholder="Cari transaksi apa?"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
                ),
              }}
              sx={{
                bgcolor: 'neutral.100',
                borderRadius: 1,
                boxShadow: 3,
                width: '100%',
                height: 56,
              }}
            />
          </Grid>

          {/* Date Picker */}
          <Grid item xs={12} sm={4} md={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  bgcolor: 'neutral.100',
                  borderRadius: 1,
                  boxShadow: 3,
                  width: '100%',
                  height: 56,
                }}
                label="Pilih Tanggal"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ width: '100%', height: '100%' }}
                  />
                )}
              />
            </LocalizationProvider>
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
                  borderRadius: 1,
                  boxShadow: 3,
                  width: '100%',
                  height: 56,
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  <em>Kategori Transaksi</em>
                </MenuItem>
                <MenuItem value="TRANSFER">Transfer</MenuItem>
                <MenuItem value="QRIS">Qris</MenuItem>
                <MenuItem value="category3">Category 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Download E-Statement */}
          <Grid item xs={12} sm={4} md={2}>
            <Button
              startIcon={<DownloadIcon />}
              sx={{
                bgcolor: 'neutral.100',
                color: 'primary.main',
                borderRadius: 1,
                boxShadow: 3,
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 56,
              }}
            >
              Download E-Statement
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 5 }}>
          <TablePrimary
            title="Mutasi Rekening"
            rows={['Transaksi','Tanggal', 'Nominal', 'Aksi']}
          >
            {paginatedData?.map((data) => (
              <TableRow key={data?.id}>
                <TableCell>pag</TableCell>
                <TableCell>{data?.date}</TableCell>
                <TableCell>{data?.amount}</TableCell>
                {/* <TableCell
                  sx={{
                    color:
                      data.status === 'Debit' ? 'error.main' : 'success.main',
                  }}
                >
                  {data.status === 'Debit' ? '-' : ''} {data.nominal}
                </TableCell> */}
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
                    key={data?.id}
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    onClick={() => {}}
                    style={{ margin: '0 4px' }}
                  >
                    Download
                  </Button>
                  <Button
                    key={data?.id}
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
            {`Halaman ${page} dari ${totalPages}`}
          </Typography>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>

      <ModalBuktiTransfer
        open={open}
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
    </Layout>
  );
};
