import BreadcrumbSecondary from "../../assets/components/Breadcrumbs/BreadcrumbSecondary";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import CardSaldo from "../../assets/components/Cards/CardSaldo";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import BarcodeIcon from "../../assets/img/icons/barcode-icon.png";
import QrisIcon from "../../assets/img/icons/qris-pengeluaran-icon.png";
import TarikTunaiIcon from "../../assets/img/icons/tarik-tunai-icon.png";
import TransferPengeuaranIcon from "../../assets/img/icons/transfer-pengeluaran-icon.png";
import TransferIcon from "../../assets/img/icons/transfer-icon.png";
import TransactionMiniIcon from "../../assets/img/icons/transaction-mini-icon.svg";
import QrMiniIcon from "../../assets/img/icons/qr-code-mini-Icon.svg";
import MoneyMiniIcon from "../../assets/img/icons/money-mini-icon.svg";
import SetorTunaiIcon from "../../assets/img/icons/setor-tunai-icon.png";
import QrisMiniIcon from "../../assets/img/icons/qris-mini-icon.svg";
import TransactionBox from "../../assets/components/boxComponents/TransactionBox";
import DynamicPieChart from "../../assets/components/chartComponents/DynamicPieChart";
import TablePrimary from "../../assets/components/tableComponents/TablePrimary";
import { ModalInfoSaldo } from "../../assets/components/Modals/ModalInfoSaldo";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useAuthContext } from "../../context/AuthContext";
import { MonthNavigator } from "../../assets/components/navigators/MonthNavigator";
import {
  formatDateRange,
  formatGroupedData,
  formatRupiah,
  groupByDate,
  parsePercentage,
  updateStructCategory,
} from "../../utils/utilities";
import FailAlert from "../../assets/components/Alerts/FailAlert";
import { LayoutSecondary } from "../layoutSecondary";
import { useTransferContext } from "../../context/TransferContext";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useGetMutations } from "../../services/account/account-mutasi";
import ModalBuktiTransfer from "../../assets/components/Modals/ModalBuktiTransfer";
import TransactionIcon from "../../assets/img/icons/transaction-mini-icon.svg";
import { formatDate } from "../../utils/utilities";
import { useGetMutationDetail } from "../../services/account/account-mutation-detail";
import ModalBuktiTransaksiQris from "../../assets/components/Modals/ModalBuktiTransaksiQris";

export const InfoSaldoPage = () => {
  const [open, setOpen] = useState(false);
  const [openBuktiTransaksi, setOpenBuktiTransaksi] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [title, setTitle] = useState("");
  const [activeSection, setActiveSection] = useState("Pemasukan");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("debit");
  const [icon, setIcon] = useState("");
  const [selectedMonth, setSelectedMonth] = useState({
    month: ("0" + (new Date().getMonth() + 1)).slice(-2),
    year: new Date().getFullYear(),
  });
  const { account } = useAuthContext();
  const { dataExpense, dataIncome, errorMutationSummary, setOptions } = useTransferContext();
  const [category, setCategory] = useState("");

  // setOptions({ month: selectedMonth.month, year: selectedMonth.year });
  useEffect(() => {
    console.log("Setting options with:", { month: selectedMonth.month, year: selectedMonth.year });
    setOptions({ month: selectedMonth.month, year: selectedMonth.year });
  }, [selectedMonth]); // Dependensi diperbaiki di sini

  const handleOpen = (transactionData, title, detail, type, icon) => {
    setSelectedTransaction(transactionData);
    setTitle(title);
    setDetail(detail);
    setType(type);
    setIcon(icon);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTransaction([]);
  };


  const incomeCategory = updateStructCategory(dataIncome)
  const expenseCategory = updateStructCategory(dataExpense)
  console.log("expanse baru :", expenseCategory)

  const transferIncomeCategory = incomeCategory?.categories.find(category => category.type === 'TRANSFER');
  const qrCategory = incomeCategory?.categories.find(category => category.type === 'QR');
  const setorCategory = incomeCategory?.categories.find(category => category.type === 'TOPUP');

  const transferExpenseCategory = expenseCategory?.categories.find(category => category.type === 'TRANSFER');
  const qrisCategory = expenseCategory?.categories.find(category => category.type === 'QRIS');
  const tarikCategory = expenseCategory?.categories?.find(category => category.type === 'WITHDRAW');

  const chartDataPemasukan = (incomeCategory?.categories || []).map((category, index) => ({
    value: parsePercentage(category.total_balance_percentage),
    color: ["#0065ae", "#0ed79c", "#feb831"][index] || "#cccccc", // Warna default jika index lebih dari jumlah warna
    icon: ["qr", "transfer", "setor"][index],
  }));

  const chartDataPengeluaran = (expenseCategory?.categories || []).map((category, index) => ({
    value: parsePercentage(category.total_balance_percentage),
    color: ["#0a3967", "#ca3a31", "#926001"][index] || "#cccccc", // Warna default jika index lebih dari jumlah warna
    icon: ["qris", "transfer", "tarik"][index],
  }));

  const groupedDataTransferExpense = groupByDate(transferExpenseCategory?.mutations);
  const groupedDataQris = groupByDate(qrisCategory?.mutations)
  const groupeDataTarik = groupByDate(tarikCategory?.mutations)

  const groupedDataTransferIncome = groupByDate(transferIncomeCategory?.mutations);
  const groupedDataTransferQr = groupByDate(qrCategory?.mutations);
  const groupeDataSetor = groupByDate(setorCategory?.mutations)

  const dataTransferExpense = formatGroupedData(groupedDataTransferExpense)
  const dataQris = formatGroupedData(groupedDataQris)
  const dataTarikTunai = formatGroupedData(groupeDataTarik)
  const dataTransferIncome = formatGroupedData(groupedDataTransferIncome)
  const dataQrTerimaTransfer = formatGroupedData(groupedDataTransferQr)
  const dataSetorTunai = formatGroupedData(groupeDataSetor)


  // Pagination state
  const [page, setPage] = useState(1);
  const [dateRange, setDateRange] = useState([null, null]);
  const rowsPerPage = 5;

  const [params, setParams] = useState({
    page: page,
    size: rowsPerPage,
  });

  const { data: dataMutasi } = useGetMutations(params);
  const [transferData, setTransferData] = useState(null);
  const { data: detailMutasi } = useGetMutationDetail(transferData);
  let MutationType = null;

  if (dataMutasi?.content?.length > 0) {
    const filteredData = dataMutasi?.content?.filter((data) => data?.id === transferData);

    if (filteredData?.length > 0) {
      MutationType = filteredData[0]?.mutation_type;
    }
  }

  useEffect(() => {
    activeSection === "Pemasukan" ? setCategory("CREDIT") : setCategory("DEBIT");
    const { start, end } = formatDateRange(dateRange);
    setParams((prevParams) => {
      const newParams = {
        ...prevParams,
        page: page - 1,
        size: rowsPerPage,
        startDate: start,
        endDate: end,
        category: category,
      };

      if (category) {
        newParams.mutationType = category;
      }

      return newParams;
    });

  }, [activeSection, category, page]);

  const handleOpenBuktiTransfer = (buktiTransfer) => {
    setOpenBuktiTransaksi(true);
    setTransferData(buktiTransfer);
  };

  const handleCloseBuktiTransfer = () => {
    if (openBuktiTransaksi) {
      setOpenBuktiTransaksi(false);
    } else {
      setOpenBuktiTransaksiQR(false);
    }
  };

  const handleShare = () => {
    console.log("Share");
  };

  const handleDownload = () => {
    console.log("Download");
  };

  return (
    <LayoutSecondary>
      <Grid
        item
        xs={12}
        sx={{
          display: "relative",
        }}
      >
        <BreadcrumbSecondary />
        <Box
          sx={{
            position: "absolute",
            top: "200px",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardSaldo account={account} />
        </Box>
      </Grid>
      <Container maxWidth="lg" sx={{ mx: "auto", my: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} sx={{ mt: 15, mb: 2 }}>
            <Box
              sx={{
                height: 44,
                backgroundColor: "primary.main",
                borderRadius: 1.25,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                boxSizing: "border-box",
              }}
            >
              {/* <MonthNavigator /> */}
              <MonthNavigator
                onMonthChange={(date) => {
                  const formattedDate = {
                    month: ("0" + (date.getMonth() + 1)).slice(-2),
                    year: date.getFullYear(),
                  };
                  setSelectedMonth(formattedDate);
                }}
                tabIndex={0}
              />
            </Box>

            <Box sx={{ bgcolor: "neutral.01", boxShadow: 3 }}>
              <Grid
                container
                spacing={1}
                sx={{ px: 2, pt: 5, mb: 0, pb: 0 }}
              >
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <ButtonBase onClick={() => setActiveSection("Pemasukan")}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: activeSection === "Pemasukan" ? "bold" : "normal",
                        color: activeSection === "Pemasukan" ? "#0066AE" : "#dedede",
                        cursor: "pointer",
                      }}
                    >
                      Pemasukan
                    </Typography>
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <ButtonBase onClick={() => setActiveSection("Pengeluaran")}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: activeSection === "Pengeluaran" ? "bold" : "normal",
                        color: activeSection === "Pengeluaran" ? "#0066AE" : "#dedede",
                        cursor: "pointer",
                        ml: 3
                      }}
                    >
                      Pengeluaran
                    </Typography>
                  </ButtonBase>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: "grid",
                  rowGap: 1,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderTop: 4,
                    borderColor: activeSection === "Pemasukan" ? "#0066AE" : "#dedede",
                    py: 1,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderTop: 4,
                    borderColor: activeSection === "Pengeluaran" ? "#0066AE" : "#dedede",
                    py: 1,
                  }}
                />
              </Box>

              {/* Transaction Box */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 2,
                }}
              >
                {activeSection === "Pemasukan" ? (
                  <>
                    <TransactionBox
                      icon={TransferIcon}
                      title="Transfer"
                      data={transferIncomeCategory}
                      onClick={() =>
                        handleOpen(
                          dataTransferIncome,
                          "Transfer Rupiah",
                          "Transfer BI Fast",
                          "credit",
                          <img width={18} src={TransactionMiniIcon} alt="Transfer Rupi Icon" />
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
                          "QR Terima Transfer",
                          "QR Terima Transfer",
                          "credit",
                          <img width={18} src={QrMiniIcon} alt="QR terima transfer Icon" />
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
                          "Setor Tunai",
                          "Setor Tunai",
                          "credit",
                          <img width={18} src={MoneyMiniIcon} alt="Setor Tunai Icon" />
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
                          "Transfer Rupiah",
                          "Transfer Ke BCA",
                          "debit",
                          <img width={18} src={TransactionMiniIcon} alt="Transfer pengeluaran icon" />
                        )
                      }
                    />
                    <TransactionBox
                      icon={QrisIcon}
                      title="QRIS"
                      data={qrisCategory}
                      onClick={() =>
                        handleOpen(
                          dataQris,
                          "QRIS",
                          "Qris",
                          "debit",
                          <img width={18} src={QrisMiniIcon} alt="QRIS Icon" />
                        )
                      }
                    />
                    <TransactionBox
                      icon={TarikTunaiIcon}
                      title="Tarik Tunai"
                      data={tarikCategory}
                      onClick={() =>
                        handleOpen(dataTarikTunai,
                          "Tarik Tunai",
                          "Tarik Tunai",
                          "debit", <CreditCardIcon />)
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
              mt: "auto",
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DynamicPieChart
              data={{
                activeSection: activeSection === "Pemasukan" ? chartDataPemasukan : chartDataPengeluaran,
                data: activeSection === "Pemasukan" ? dataIncome : dataExpense,
              }}
              centerLabel={activeSection === "Pemasukan" ? "Total Pemasukan" : "Total Pengeluaran"}
              // dataCart={data.income}
              width={500}
              height={500}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", mt: 5, flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              href="/mutasi"
              variant="contained"
              sx={{ borderRadius: 3, textTransform: "none" }}
              role="button"
            >
              Lihat Mutasi Rekening <ChevronRightOutlined />
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}>
            <TablePrimary title="Aktivitas Terakhir" rows={["Transaksi", "Tanggal", "Nominal", "Aksi"]}>
              {dataMutasi?.content?.slice(0, 2).map((data) => (
                <TableRow key={data?.id}>
                  <TableCell >
                    <Grid container sx={{ display: "flex", height: "100%", alignItems: "center", minWidth: "20rem" }}>
                      <Grid
                        item
                        xs={1.5}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <img src={TransactionIcon} alt="icon transaksi" height={24} width="auto" />
                      </Grid>
                      <Grid item xs={10.5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="caption">{data.mutation_type}</Typography>
                        <Typography variant="caption" >{data.bank_name}</Typography>
                        <Typography variant="caption">{data.full_name}</Typography>
                        <Typography variant="caption">{data.account_number}</Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="caption">{formatDate(data?.date)}</Typography>
                      <Typography variant="caption" sx={{ color: "#B3B3B3" }}>
                        {" "}
                        {data?.time}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: data.transaction_type === "DEBIT" ? "#CB3A31" : "#12D79C",
                      }}
                    >
                      {data.transaction_type === "DEBIT" ? "-" : "+"} Rp.{formatRupiah(data?.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="standar"
                      startIcon={<ReceiptIcon />}
                      onClick={() => {
                        handleOpenBuktiTransfer(data?.id);
                      }}
                      sx={{ mx: 1, my: 0.5, p: 1, px: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 3, color: "primary.main", textTransform: 'none' }}
                      aria-label="Lihat bukti transaksi"
                    >
                      Lihat Bukti
                    </Button>

                    <Button
                      variant="standar"
                      startIcon={<ShareIcon />}
                      onClick={() => { }}
                      sx={{ mx: 1, my: 0.5, p: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 3, color: "primary.main", textTransform: 'none' }}
                      aria-label="Bagikan bukti transaksi"
                    >
                      Bagikan Resi
                    </Button>

                    <Button
                      variant="standar"
                      startIcon={<DownloadIcon />}
                      onClick={() => { handleDownload() }}
                      sx={{ mx: 1, my: 0.5, p: 1, px: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: 3, color: "primary.main", textTransform: 'none' }}
                      aria-label="Download bukti transaksi"
                    >
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TablePrimary>
          </Box>
        </Box>
      </Container>
      <ModalInfoSaldo
        open={open}
        onClose={handleClose}
        transactions={selectedTransaction}
        title={title}
        detailTransaction={detail}
        type={type}
        icon={icon}
      />

      {MutationType == "TRANSFER" ? (
        <>
          <ModalBuktiTransfer
            open={openBuktiTransaksi}
            onClose={() => setOpenBuktiTransaksi(null)}
            appName={"Rupi App"}
            status={
              dataMutasi?.content?.find((data) => data?.id === transferData)?.transaction_type === "CREDIT"
                ? "Bukti Terima Transfer"
                : "Transfer Berhasil"
            }
            recipientName={detailMutasi?.receiver_detail?.name}
            bankName={"RUPI APP"}
            accountNumber={detailMutasi?.receiver_detail?.account_number}
            transferAmount={detailMutasi?.mutation_detail?.amount}
            transferMethod={detailMutasi?.transaction_purpose}
            transferFee={0}
            totalTransaction={detailMutasi?.mutation_detail?.amount}
            senderName={detailMutasi?.sender_detail?.name}
            senderBankName={"Rupi App"}
            senderAccountSuffix={detailMutasi?.sender_detail?.account_number}
          />
        </>
      ) : (
        <>
          <ModalBuktiTransaksiQris
            open={openBuktiTransaksi}
            onClose={() => setOpenBuktiTransaksi(null)}
            appName="Rupi App"
            status="Transfer Berhasil"
            recipientName={detailMutasi?.merchant}
            bankName="Bank BCA"
            transferAmount={detailMutasi?.amount}
            transferFee="0"
            totalTransaction={detailMutasi?.amount}
            senderName={account?.full_name}
            senderBankName="Rupi App"
            senderAccountSuffix={account?.account_number}
          />
        </>
      )}

      {errorMutationSummary && (
        <FailAlert
          message={errorMutationSummary?.response?.data?.message || errorMutationSummary?.message}
          title="Gagal mengambil data"
        />
      )}
    </LayoutSecondary>
  );
};

// export default InfoSaldoPage;