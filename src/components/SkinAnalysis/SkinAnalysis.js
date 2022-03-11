import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Carousel from "../shared/Carousel/Carousel";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ mt: 1, ml: 1, mr: 2, display: "flex", flexWrap: "wrap" }}>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="body2" color="text.secondary">
          {props.value < 50 ? "Poor" : props.value < 75 ? "Good" : "Excelent"}
        </Typography>
      </Box>
    </Box>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FAA500" : "#E6E6E6",
  },
}));

export default function SkinAnalysis() {
  const [progress, setProgress] = React.useState(51);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        style={{ marginTop: 5, color: "#FAA500" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        SKIN ANALYSIS
      </Typography>
      <Typography
        style={{ marginLeft: 10, color: "gray" }}
        align="left"
        variant="h5"
        component="div"
      >
        Best Skin Results
      </Typography>
      <Divider variant="middle" />
      <LinearProgressWithLabel value={progress} title="Pores" />
      <BorderLinearProgress
        style={{ margin: "0 10px" }}
        variant="determinate"
        value={progress}
      />
      <LinearProgressWithLabel value={75} title="Pores" />
      <BorderLinearProgress
        style={{ margin: "0 10px" }}
        variant="determinate"
        value={75}
      />
      <Typography
        style={{ marginLeft: 10, marginTop: 20, color: "gray" }}
        align="left"
        variant="h5"
        component="div"
      >
        Worst Skin Results
      </Typography>
      <Divider variant="middle" />
      <LinearProgressWithLabel value={45} title="Dark Circles" />
      <BorderLinearProgress
        style={{ margin: "0 10px" }}
        variant="determinate"
        value={45}
      />
      <LinearProgressWithLabel value={40} title="Oilness" />
      <BorderLinearProgress
        style={{ margin: "0 10px" }}
        variant="determinate"
        value={40}
      />
      <Divider style={{ margin: "20px 5px", backgroundColor: "#FAA500" }} />
      <Carousel />
    </Box>
  );
}
