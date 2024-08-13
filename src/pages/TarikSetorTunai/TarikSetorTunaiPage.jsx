import { useState } from "react";

import { Box, Button, Card, Paper, Typography } from "@mui/material";
import { TarikTunai } from "./TarikTunai";
import { Layout } from "../layout";
import { SetorTunai } from "./SetorTunai";
import { Breadcrumb } from "../../assets/components/Breadcrumbs/Breadcrumb";
// import { BreadcrumbsComponent } from "../../assets/components/Breadcrumbs/Breadcrumb";


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
					<SetorTunai />
				</>
			);
		} else if (currentView === "token") {
			return console.log("token");
		}
	};

	return (
    <Layout>
      <Box sx={{ px: 6 ,paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Breadcrumb />

        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: 0,
            my: 6,
            py: 1,
            // height:"50px",
            fontWeight: "bold",
          }}
          variant="h5"
        >
          Tarik & Setor Tunai
        </Typography>

        <Card component={Paper} elevation={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              p: 2,
              boxShadow: 1,
              //   bgcolor: "red",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: currentView === "tarik" ? "" : "transparent",
                color: currentView === "tarik" ? "#fff" : "grey",
                width: "350px",
                borderRadius: "20px",
                boxShadow: currentView === "tarik" ? "" : "none",
                textTransform: "none",
              }}
              onClick={() => setCurrentView("tarik")}
              aria-label="tarik tunai"
            >
              Tarik
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: currentView === "setor" ? "" : "transparent",
                color: currentView === "setor" ? "#fff" : "grey",
                width: "350px",
                borderRadius: "20px",
                boxShadow: currentView === "setor" ? "" : "none",
                textTransform: "none",
              }}
              onClick={() => setCurrentView("setor")}
              aria-label="setor tunai"
            >
              Setor
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: currentView === "token" ? "" : "transparent",
                color: currentView === "token" ? "#fff" : "grey",
                width: "350px",
                borderRadius: "20px",
                boxShadow: currentView === "token" ? "" : "none",
                textTransform: "none",
              }}
              onClick={() => setCurrentView("token")}
              aria-label="token"
            >
              Token
            </Button>
          </Box>

          {renderContent()}
        </Card>
      </Box>
    </Layout>
  );
};