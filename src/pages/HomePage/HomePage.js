import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import SkinAnalysis from "../../components/SkinAnalysis/SkinAnalysis";
import HairAnalysis from "./../../components/HairAnalysis/HairAnalysis";
import BodyPosture from "./../../components/BodyPosture/BodyPosture";
import StressLevel from "./../../components/StressLevel/StressLevel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={8} md={6}>
          <h3 style={{ marginLeft: "50%" }}>Mary Jane Doe</h3>
        </Grid>
        <Grid item xs={4} md={6}>
          <h3 style={{ marginLeft: "50%" }}>X</h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                margin: "0 8px",
                width: "100%",

                padding: 0,
                borderRadius: 5,
              },
            }}
          >
            <Paper elevation={3}>
              <SkinAnalysis />
            </Paper>
          </Box>
          <HairAnalysis />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                margin: "0 8px",
                width: "100%",

                padding: 0,
                borderRadius: 5,
              },
            }}
          >
            <Paper elevation={3}>
              <BodyPosture />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Divider style={{ margin: "20px 5px", backgroundColor: "#03AF14" }} />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                margin: "0 8px",
                width: "100%",

                padding: 0,
                borderRadius: 5,
              },
            }}
          >
            <Paper elevation={3}>
              <StressLevel />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 3,

          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" gutterBottom color="black">
          Powered by CHOWIS
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          version 2.0.0
        </Typography>
      </Box>
    </Box>
  );
}
