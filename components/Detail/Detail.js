
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./detail.module.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Detail = () => {
  return (
    <Box sx={{ mt: "10px" }}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ backgroundColor: "rgba(255, 0, 107, 1)" }}
        >
          Live
        </Button>
        <Box>
          <Typography variant="body1" sx={{ color: "white" }}>
            Operational Status
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            Status : High Priority
          </Typography>
        </Box>
      </Box>
      <Box className={styles.BlueBox}>
        <Box className={styles.rectangle}>
          <Box className={styles.rectangleInner}>
            {[...Array(4)].map((_, index) => (
              <div className={styles.animatedText} key={index}>
                <Button color="error" endIcon={<WarningAmberIcon />}>
                  Warning
                </Button>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", marginLeft: "10px" }}
                >
                  Rice Supply Level Below 7% capacity
                </Typography>
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
