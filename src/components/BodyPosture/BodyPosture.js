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

function BodyPostureinfo(props) {
  return (
    <Box sx={{ m: 2, display: "flex", flexWrap: "wrap" }}>
      <Box
        sx={{
          width: "70%",

          display: "flex",
          textAlign: "left",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" gutterBottom color="black">
          You have a bad posture
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Button
          style={{
            borderRadius: "50px",
            marginTop: 10,
            backgroundColor: "#870008",
          }}
          size="large"
          variant="contained"
          fullWidth
        >
          Read more
        </Button>
      </Box>
      <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          sx={{
            display: "block",
            minWidth: 100,
            overflow: "hidden",
            width: "100%",
          }}
          src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JdBpCriaKZivzdpMsCydQwAAAA%26pid%3DApi&f=1`}
          alt={`skeliton`}
        />
      </Box>
      <Box
        sx={{
          width: "100%",

          display: "flex",
          textAlign: "left",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography align="center" variant="body1" gutterBottom color="black">
          How to correct your posture?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Do this evey day to correct your posture, please follow the
          instructions carefully.
        </Typography>
      </Box>
    </Box>
  );
}

export default function BodyPosture() {
  const [progress, setProgress] = React.useState(51);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        style={{ marginTop: 5, color: "#870008" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        BODY POSTURE
      </Typography>

      <BodyPostureinfo />
    </Box>
  );
}
