import { useState } from "react";

import { Box, Card, Paper, Typography } from "@mui/material";
import { Breadcrumb } from "../../assets/components/Breadcrumbs/Breadcrumb";

import { Layout } from "../layout";
import { TarikTunai } from "./TarikTunai";
import { SetorTunai } from "./SetorTunai";

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
      return console.log("token");
    }
  };

  return (
    <Layout>
      <Box sx={{ mx: 6, paddingTop: "1.5rem", paddingBottom: "2rem" }}>
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

        <Card sx={{ p: 1 }} component={Paper} elevation={4}>
          {(currentView !== "tarik" || currentStep === 1) &&
          (currentView !== "setor" || currentStep === 1) &&
          (
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
          )}
          {renderContent()}
        </Card>
      </Box>
    </Layout>
  );
};