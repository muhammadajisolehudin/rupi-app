// TransferBerhasilPage.js
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ilustrasi from "../../../assets/img/complete ilustrasi.png";
// import ModalTransferBerhasil from "../../../assets/components/Modals/ModalTransferBerhasil";
import ModalBuktiTransfer from "../../../assets/components/Modals/ModalBuktiTransfer";
import { useTransferContext } from "../../../context/TransferContext";
import { useGetMutationDetail } from "../../../services/account/account-mutation-detail";
import { useAuthContext } from "../../../context/AuthContext";
import ModalBuktiTransaksiQris from "../../../assets/components/Modals/ModalBuktiTransaksiQris";


export const SuccesInfoBayar = () => {
	const { formData } = useTransferContext()
	const { data: detailMutasi } = useGetMutationDetail(formData?.mutation_id)
	const { account } = useAuthContext()
	// console.log("ini untuk bahan bukti", formData)
	const [open, setOpen] = useState(false);
	// console.log("id mutasi salah :", formData?.mutation_id)
	// console.log("data nama merchan: ", formData?.merchant)
	// console.log("data transaction id :", formData?.detailQris.transaction_id)
	
	// merchant
	// :
	// "REZA ISHAQ MAULANA"
	// transaction_id
	// :
	// "0703A01"

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// const accountNumber = "992192925554";

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
				aria-hidden="true"
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
				aria-label="Button Lihat Bukti Transfer"
			>
				Lihat Bukti Transfer
			</Button>

			{/* <ModalTransferBerhasil open={open} handleClose={handleClose} accountNumber={accountNumber} /> */}
			<ModalBuktiTransaksiQris
				open={open}
				onClose={handleClose}
				appName="Rupi App"
				status="Transfer Berhasil"
				recipientName={detailMutasi?.merchant}
				bankName="Bank BCA"
				// accountNumber={destinationDetailTransaksi?.account_number}
				transferAmount={detailMutasi?.amount}
				// transferMethod={detailMutasi?.transaction_purpose}
				transferFee="0"
				totalTransaction={detailMutasi?.amount}
				senderName={account?.full_name}
				senderBankName="Rupi App"
				senderAccountSuffix={account?.account_number}
			// onShare={handleShare}
			// onDownload={handleDownload}
			/>
		</Box>
	);
};