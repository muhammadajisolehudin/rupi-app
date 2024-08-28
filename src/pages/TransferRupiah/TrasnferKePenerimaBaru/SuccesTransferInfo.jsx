// TransferBerhasilPage.js
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ilustrasi from "../../../assets/img/complete ilustrasi.png";
import ModalBuktiTransfer from "../../../assets/components/Modals/ModalBuktiTransfer";
import { useTransferContext } from "../../../context/TransferContext";
import { useGetMutationDetail } from "../../../services/account/account-mutation-detail";
import { useGetTransaksiDetail } from "../../../services/transfer-rupiah/get-detail-transaksi";
import { hideAccountNumber } from "../../../utils/utilities";

export const SuccesTransferInfo = () => {
	const [open, setOpen] = useState(false);
	const { formData } = useTransferContext()

	const { data: detailTransaksi } = useGetMutationDetail(formData.mutation_id)
	const { data: destinationDetailTransaksi } = useGetTransaksiDetail(formData.destination_id)

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "1rem",
				marginTop: "2rem",
				pb: 8,
			}}
		>
			<Typography variant="h4" sx={{ fontWeight: "bold" }}>
				Transaksi Berhasil
			</Typography>
			<img
				src={ilustrasi}
				alt="Ilustrasi"
				style={{ width: "100%", maxWidth: "200px", height: "auto" }}
				aria-hidden={"true"}
			/>
			<Button
				onClick={handleOpen}
				sx={{
					backgroundColor: "#0066AE",
					py: 2,
					px: 18,
					borderRadius: "12px",
					textTransform: "capitalize",
					mt: 4,
				}}
				variant="contained"
				aria-label="Lihat Bukti Transfer"
			>
				Lihat Bukti Transfer
			</Button>

			{/* <ModalTransferBerhasil open={open} handleClose={handleClose} accountNumber={accountNumber} /> */}
			<ModalBuktiTransfer
				open={open}
				onClose={handleClose}
				appName="Rupi Bank"
				status="Transfer Berhasil"
				recipientName={detailTransaksi?.receiver_detail.name}
				bankName={destinationDetailTransaksi?.bank_name}
				accountNumber={destinationDetailTransaksi?.account_number}
				transferAmount={detailTransaksi?.mutation_detail.amount}
				transferMethod={detailTransaksi?.transaction_purpose}
				transferFee="0"
				totalTransaction={detailTransaksi?.mutation_detail.amount}
				senderName={detailTransaksi?.sender_detail.name}
				senderBankName="Rupi Bank"
				senderAccountSuffix={hideAccountNumber(detailTransaksi?.sender_detail.account_number) }
				// onShare={handleShare}
				// onDownload={handleDownload}
			/>
		</Box>
	);
};

// SuccesTransferInfo.propTypes = {
//   onNext: PropTypes.any,
// };
