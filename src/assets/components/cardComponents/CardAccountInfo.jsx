import { Card, Typography } from "@mui/material";
import { useAuthContext } from "../../../context/AuthContext";

export const CardAccountInfo = () => {
	const { account } = useAuthContext();
	const accountNumber = account.account_number;
	const balance = account.balance;

	const formatedAccountNumber = accountNumber ? accountNumber.replace(/(\d{4})(?=\d)/g, "$1 ") : "";
	const formatedBalance = balance ? balance.replace(/Rp|\,00/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") : "";

	return (
		<Card variant="outlined" sx={{ borderRadius: 2, p: 2, my: 2 }}>
			<div id="account-info-label">
				<Typography aria-label="nomor rekening">
					<span style={{ color: "grey" }}>No. Rekening:</span> <span>{formatedAccountNumber}</span>
				</Typography>
				<Typography aria-label="total balance rekening">
					<span style={{ color: "grey" }}>Saldo:</span> <span>Rp{" "}{formatedBalance}</span>
				</Typography>
			</div>
		</Card>
	);
};
