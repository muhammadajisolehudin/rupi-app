// TransferBerhasilPage.js
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ilustrasi from "../../../assets/img/complete ilustrasi.png";
// import ModalTransferBerhasil from "../../../assets/components/Modals/ModalTransferBerhasil";
import { useTransferContext } from "../../../context/TransferContext";
import { useGetMutationDetail } from "../../../services/account/account-mutation-detail";
import { useAuthContext } from "../../../context/AuthContext";
import ModalBuktiTransaksiQris from "../../../assets/components/Modals/ModalBuktiTransaksiQris";
import { hideAccountNumber } from "../../../utils/utilities";


export const SuccesInfoBayar = () => {
	const { formData } = useTransferContext()
	const { data: detailMutasi } = useGetMutationDetail(formData?.mutation_id)
	const { account } = useAuthContext()
	const [open, setOpen] = useState(false);


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

			<ModalBuktiTransaksiQris
				open={open}
				onClose={handleClose}
				appName="Rupi App"
				status="Transfer Berhasil"
				recipientName={detailMutasi?.merchant}
				bankName="Id Transaksi"
				accountNumber={detailMutasi?.mutation_id}
				// accountNumber={destinationDetailTransaksi?.account_number}
				transferAmount={detailMutasi?.amount}
				// transferMethod={detailMutasi?.transaction_purpose}
				transferFee="0"
				totalTransaction={detailMutasi?.amount}
				senderName={account?.full_name}
				senderBankName="Rupi App"
				senderAccountSuffix={hideAccountNumber(account?.account_number)}
			// onShare={handleShare}
			// onDownload={handleDownload}
			/>
		</Box>
	);
};
