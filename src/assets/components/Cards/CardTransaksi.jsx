import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import profileIcon from "../../img/icons/placeholder-profile.png";
import { useTransferContext } from "../../../context/TransferContext";
import { useNavigate } from "react-router-dom";

export const CardTransaksi = ({ data, handleToggleFavorite }) => {
	const { setStep, handleNext } = useTransferContext();
	const navigate = useNavigate();
	const handleCardClick = (receiver) => {
		setStep(1);
		handleNext({
			account_number: receiver.account_number, fullname: receiver.fullname, destination_id: receiver.id });
		navigate('/transfer-rupiah/transfer-ke-daftar-rekening');
	};


	const handleStarClick = (event, cardId, isFavorite) => {
		event.stopPropagation(); // Prevents the card click handler from being triggered
		handleToggleFavorite(cardId, isFavorite);
	};
	
	return (
		<Box sx={{ minWidth: 275 }}>
			{data?.map((card) => (
				<Card onClick={() => { handleCardClick(card) }} key={card.id} variant="outlined" sx={{ marginBottom: 4, borderRadius: 2 }} tabIndex={0}>
					<CardContent sx={{
						backgroundColor: "white", padding: 1, paddingBottom: "8px !important", 
						"&:hover": {
							backgroundColor: "#0A3967",
							color: "white",
							cursor: 'pointer',
							}, 
						}}
						aria-label={`pilih no rekening ${card.fullname} untuk ditransfer`}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginX: "3rem",
							}}
						>
							<Box sx={{ display: "flex", gap: 4, width: "100%", alignItems: "center" }}>
								<img src={profileIcon} alt={card.fullname} style={{ height: 40 }} />
								<Box>
									<Typography>{card.fullname}</Typography>
									<Typography variant="caption">{card.account_number}</Typography>
								</Box>
							</Box>
							<StarRoundedIcon
								id="button-transaksi-favorite"
								fontSize="large"
								sx={{
									color: card.favorites ? "#FFB831" : "#B3B3B3", // Pastikan penggunaan `card.favorite`
									cursor: "pointer",
									zIndex:"9999"
								}}
								onClick={(event) => handleStarClick(event, card.id, card.favorites)}
								role={"button"}
								tabIndex={0}
								aria-label={card.favorites ? "transaksi favorit" : "transaksi non favorit"}
							/>
						</Box>
					</CardContent>
				</Card>
			))}
		</Box>
	);
};

CardTransaksi.propTypes = {
	data: PropTypes.array.isRequired,
	handleToggleFavorite: PropTypes.func.isRequired,
};
