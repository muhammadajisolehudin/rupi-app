// TransferBerhasilPage.js
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ilustrasi from "../../../assets/img/complete ilustrasi.png";
import ModalBuktiTransfer from "../../../assets/components/Modals/ModalBuktiTransfer";
import { useGetTransaksiDetail } from "../../../services/transfer-rupiah/get-detail-transaksi";

export const SuccesTransferInfo = () => {
	const [open, setOpen] = useState(false);


	const { data : detailTransaksi } = useGetTransaksiDetail()

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
			{/* <ModalBuktiTransfer
				open={open}
				onClose={handleClose}
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
			/> */}
		</Box>
	);
};

// SuccesTransferInfo.propTypes = {
//   onNext: PropTypes.any,
// };
