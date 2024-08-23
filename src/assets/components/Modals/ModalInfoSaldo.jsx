import PropTypes from "prop-types";
import {
	Box,
	Typography,
	IconButton,
	Divider,
	Modal,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { green, red } from "@mui/material/colors";
import { Block } from "@mui/icons-material";

export const ModalInfoSaldo = ({
	open,
	onClose,
	transactions,
	title,
	detailTransaction,
	type,
	icon,
}) => {
	const error = red[500];
	const success = green[500];
	console.log("ini data : ", transactions);
	return (
		<Modal open={open} onClose={onClose}>
			<Box
				sx={{
					maxWidth: 500,
					bgcolor: "background.paper",
					inset: 0,
					boxShadow: 24,
					p: 3,
					borderRadius: 2,
					mx: "auto",
					mt: 15,
					justifyContent: "center",
				}}
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							mb: 2,
						}}
					>
						<Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
							Daftar Transaksi
						</Typography>
						<IconButton onClick={onClose} aria-label="Button tutup list transaksi,">
							<CloseIcon />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center", // Center content horizontally
							alignItems: "center", // Center content vertically if needed
							width: "100%",
						}}
					>
						<Box
							sx={{
								position: "relative", // Ensure the Box is positioned relative for the pseudo-element
								display: "inline-block", // Ensure the Box only wraps around the content
								"&::after": {
									content: '""',
									position: "absolute",
									bottom: -2, // Adjust this value if needed to align with the Divider
									left: "50%", // Center the line horizontally
									transform: "translateX(-50%)", // Adjust positioning to center line
									width: "180px", // Set the width to a constant value
									height: 3,
									backgroundColor: "#0066AE",
									borderRadius: "5px",
								},
							}}
						>
							<Typography sx={{ mb: 1, fontWeight: "bold" }}>{title}</Typography>
						</Box>
					</Box>
				</Box>

				<Divider />
				<Box
					sx={{
						maxHeight: "60vh",
						overflowY: "auto",
					}}
				>
					<List>
						{transactions?.map((transaction, index) => (
							<Box key={index} sx={{ px: 1 }}>
								<Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2, mb: 1 }}>
									{transaction.date}
								</Typography>
								<Divider sx={{ mb: 2 }} />
								{transaction?.transactions.map((detail, idx) => (
									<Box key={idx} sx={{ display: "flex", my: 1 }}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												mr: 2,
												mt: "3px",
											}}
										>
											{icon}
										</Box>
										<Box sx={{ flexGrow: 1 }}>
											<Typography>
												{detailTransaction}
												<br />
											</Typography>
											<Typography variant="body2" color="textSecondary">
												{detail.full_name}
												<br />
												{detail.account_number}
											</Typography>
										</Box>
										<Typography
											variant="body2"
											color={type === "debit" ? error : success}
											fontWeight="bold"
											sx={{ ml: 2 }}
										>
											{type === "debit" ? "-" : "+"}
											{detail.amount}
										</Typography>
									</Box>
								))}
							</Box>
						))}
					</List>
				</Box>
			</Box>
		</Modal>
	);
};

ModalInfoSaldo.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			details: PropTypes.arrayOf(
				PropTypes.shape({
					title: PropTypes.string.isRequired,
					from: PropTypes.string.isRequired,
					name: PropTypes.string.isRequired,
					account: PropTypes.string.isRequired,
					amount: PropTypes.string.isRequired,
				})
			).isRequired,
		})
	).isRequired,
	type: PropTypes.oneOf(["debit", "credit"]),
	icon: PropTypes.node.isRequired,
};
