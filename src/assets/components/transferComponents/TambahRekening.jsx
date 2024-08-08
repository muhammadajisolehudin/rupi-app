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
		<Box
			type="button"
			role="button"
			aria-labelledby="tambah-rekening-baru"
			sx={{
				backgroundColor: "#EFEFEF",
				marginY: 5,
				width: "100%",
				borderRadius: 2,
			}}
		>
			<Button variant="outlined" style={{ width: "100%", border: "none" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 3,
						width: "100%",
					}}
					onClick={() => handlePageChange("/transfer-rupiah/transfer-ke-penerima-baru")}
				>
					<img
						src={addIcon}
						alt=""
						style={{ cursor: "pointer" }}
						onClick={() => handlePageChange("/")}
					/>
					<Typography id="tambah-rekening-baru" variant="body1" sx={{ color: "#0A3967" }}>
						Tambah rekening baru
					</Typography>
					<ArrowForwardIosRoundedIcon
						style={{ color: "#0066AE", cursor: "pointer" }}
						onClick={() => handlePageChange("/")}
					/>
				</Box>
			</Button>
		</Box>
		// </Button>
	);
};
