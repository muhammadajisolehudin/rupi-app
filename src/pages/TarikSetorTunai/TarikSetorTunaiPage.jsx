import { useState } from "react";

import { Box, Card, Paper, Typography } from "@mui/material";
import { Breadcrumb } from "../../assets/components/Breadcrumbs/Breadcrumb";

import { Layout } from "../layout";
import { TarikTunai } from "./TarikTunai";
import { SetorTunai } from "./SetorTunai";
import { RiwayatTransaksiToken } from "./RiwayatTransaksiToken";

export const TarikSetorTunaiPage = () => {
  const [currentView, setCurrentView] = useState("tarik");
  const [currentStep, setCurrentStep] = useState(1);

  const renderContent = () => {
    if (currentView === "tarik") {
      return (
        <>
          <TarikTunai onStepChange={setCurrentStep} />
        </>
      );
    } else if (currentView === "setor") {
      return (
        <>
          <SetorTunai onStepChange={setCurrentStep} />
        </>
      );
    } else if (currentView === "token") {
      return (
        <>
          <RiwayatTransaksiToken />
        </>
      );
    }
  };

  return (
    <Layout>
      <Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "4rem" }}>
        <Breadcrumb />

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

        <Card component={Paper} elevation={4} >
          {(currentView !== "tarik" || currentStep === 1) &&
            (currentView !== "setor" || currentStep === 1) &&
            (
              <Card elevation={4} sx={{ display: "flex", justifyContent: "space-evenly", p: 2, borderRadius: '4px 4px 0 0' }}>
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
              </Card>
            )}
          {renderContent()}
        </Card>
      </Box>
    </Layout>
  );
};