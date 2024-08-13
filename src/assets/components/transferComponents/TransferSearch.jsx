import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import SearchIcon from "../../img/icons/Search.svg";
import InputBase from "@mui/material/InputBase";
import ScanIcon from "../../img/icons/Scan.svg";

export const TransferSearch = () => {
	const navigate = useNavigate();

	const handlePageChange = (path) => {
		navigate(path);
	};
	return (
		<Box sx={{ display: "flex", marginY: 5, justifyContent: "space-between", alignItems: "center" }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					position: "relative",
					borderRadius: 2,
					border: "1px solid var(--Neutral-03, #B3B3B3)",
					flexGrow: 1,
					marginRight: 2,
					height: "50px",
				}}
			>
				<img
					id="searchIcon"
					src={SearchIcon}
					alt="search icon"
					style={{ position: "absolute", left: "15px", height: "18px" }}
					aria-hidden="true"
				/>
				<InputBase
					id="searchBox"
					placeholder="Cari Nomor Rekening"
					inputProps={{ "aria-label": "search" }}
					sx={{
						paddingLeft: "40px",
						paddingRight: "10px",
						width: "100%",
					}}
					role="search"
					tabIndex={0}
				/>
			</Box>
			<img
				id="scanIcon"
				src={ScanIcon}
				alt="QRIS"
				style={{ height: "40px", cursor: "pointer" }}
				onClick={() => handlePageChange("/qr-terima-transfer")}
				role={"button"}
				tabIndex={0}
			/>
		</Box>
	);
};
