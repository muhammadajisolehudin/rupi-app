import { Box, Button, Typography } from "@mui/material";
import addIcon from "../../img/icons/Add-Rectangle.svg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";

export const TambahRekening = () => {
	const navigate = useNavigate();

	const handlePageChange = (path) => {
		navigate(path);
	};

	return (
		// <Button variant="outlined" style={{ width:"100%" }}>
		<Button
			type="button"
			role="button"
			aria-labelledby="tambah-rekening-baru"
			sx={{
				backgroundColor: "#EFEFEF",

				marginY: 5,
				width: "100%",
				borderRadius: 2,
				transition: 'background-color 0.3s ease', // Animasi perubahan warna background
				'&:hover': {
					backgroundColor: "#0A3967",
				},
			}}
		>
			<Box variant="outlined" style={{
				width: "100%", border: "none", color: "#0A3967",
			}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 3,
						width: "100%",
						'&:hover': {
							color: "white",
							borderColor: "white", // Juga ubah warna border jika diperlukan
						},
					}}
					onClick={() => handlePageChange("/transfer-rupiah/transfer-ke-penerima-baru")}
				>
					<img
						src={addIcon}
						alt=""
						style={{ cursor: "pointer" }}
						onClick={() => handlePageChange("/")}
					/>
					<Typography variant="h6" id="tambah-rekening-baru" sx={{ textTransform: 'none' }}>
						Tambah rekening baru
					</Typography>
					<ArrowForwardIosRoundedIcon
						style={{ cursor: "pointer" }}
						onClick={() => handlePageChange("/")}
					/>
				</Box>
			</Box>
		</Button>
		// </Button>
	);
};
