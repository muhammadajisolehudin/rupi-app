import { useState } from "react";
import { Layout } from "./layout";
import { Box, Card, Container, Paper, Typography } from "@mui/material";
import { CardAccountInfo } from "../assets/components/cardComponents/CardAccountInfo";
import { TarikTunai } from "../assets/components/tarikSetorComponents/TarikTunai";

export const TarikSetorTunaiPage = () => {
	const [currentView, setCurrentView] = useState("tarik");

	const renderContent = () => {
		if (currentView === "tarik") {
			return (
				<>
					<TarikTunai />
				</>
			);
		} else if (currentView === "setor") {
			return (
				<>
					<Typography variant="h5" sx={{ mt: 5 }}>
						Sumber Rupiah
					</Typography>
					<CardAccountInfo accountNumber={"5667 2323 1444 5554"} balance={5000000} />
					<button>Lanjutkan</button>
				</>
			);
		} else if (currentView === "token") {
			return console.log("token");
		}
	};

	return (
		<Layout>
			<Container sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
				<Card sx={{ p: 1 }} component={Paper} elevation={4}>
					<Box>
						<Typography>
							<span style={{ color: "#B3B3B3" }}>Beranda / </span>
							<span style={{ color: "#0066AE" }}>Tarik & Setor Tunai</span>
						</Typography>
						{/* breadcrumbs */}
					</Box>
				</Card>

				<Typography
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mx: 0,
						my: 6,
						fontWeight: "bold",
					}}
					variant="h5"
				>
					Tarik & Setor Tunai
				</Typography>

				<Card sx={{ p: 1 }} component={Paper} elevation={4}>
					<Box sx={{ display: "flex", justifyContent: "space-evenly", p: 2, boxShadow: 1 }}>
						<button
							style={{
								backgroundColor: currentView === "tarik" ? "#0066AE" : "transparent",
								color: currentView === "tarik" ? "#fff" : "grey",
								width: "350px",
								borderRadius: "20px",
								padding: "10px",
								border: 0,
							}}
							onClick={() => setCurrentView("tarik")}
						>
							Tarik
						</button>
						<button
							style={{
								backgroundColor: currentView === "setor" ? "#0066AE" : "transparent",
								color: currentView === "setor" ? "#fff" : "grey",
								width: "350px",
								borderRadius: "20px",
								padding: "10px",
								border: 0,
							}}
							onClick={() => setCurrentView("setor")}
						>
							Setor
						</button>
						<button
							style={{
								backgroundColor: currentView === "token" ? "#0066AE" : "transparent",
								color: currentView === "token" ? "#fff" : "grey",
								width: "350px",
								borderRadius: "20px",
								padding: "10px",
								border: 0,
							}}
							onClick={() => setCurrentView("token")}
						>
							Token
						</button>
					</Box>

					{renderContent()}
				</Card>
			</Container>
		</Layout>
	);
};
