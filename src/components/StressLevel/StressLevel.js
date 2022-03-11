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
import { Button } from "@mui/material";

function StressLevelInfo(props) {
  return (
    <Box
      sx={{
        mt: 1,
        ml: 1,
        mr: 2,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "55%",
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="body1" gutterBottom color="black">
          You are angry
        </Typography>
      </Box>
      <Box sx={{ width: "40%", display: "flex", justifyContent: "flex-start" }}>
        <Box
          component="img"
          sx={{
            display: "block",
            width: 50,
            height: 50,
            overflow: "hidden",
          }}
          src={`https://www.emojipik.com/wp-content/uploads/2021/08/Angry-Emoji-Png-Very-Angry-Whatsapp-Emoji-Transparent-Png-Png-Image-Free-Download-1024x1024.png`}
          alt={`angrysmile`}
        />
      </Box>
      <Button
        style={{
          borderRadius: "50px",
          margin: "20px 0",
          backgroundColor: "#03AF14",
          width: "70%",
        }}
        size="large"
        variant="contained"
      >
        Read more
      </Button>
    </Box>
  );
}

export default function StressLevel() {
  const [progress, setProgress] = React.useState(51);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        style={{ marginTop: 5, color: "#03AF14" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        STRESS LEVEL
      </Typography>

      <StressLevelInfo value={progress} title="Pores" />
    </Box>
  );
}
