"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import styles from "./RoadMap.module.css";

const RoadMap = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Typography variant="h4" color="white" textAlign="center">
        [Road Map]
      </Typography>
      <Box
        className={styles.launchMapBox}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Box
          className={styles.launchMapBox1}
          sx={{ alignSelf: { xs: "left", md: "center" } }}
        >
          <Typography variant="h4" color="white" textAlign="center">
            [Launch Beta V1.0]
          </Typography>
          <Typography variant="h5" color="white" textAlign="center">
            ETA September , 2022
          </Typography>
        </Box>
        <Box className={styles.launchMapBox2}>
          <Box sx={{ margin: "16px" }} className={styles.container}>
            <motion.div
              whileInView={{
                x: [200, 0],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", loop: Infinity }}
            >
              <Box sx={{ margin: "16px" }} className={styles.divBox}>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ marginTop: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
              </Box>
            </motion.div>
          </Box>
          <Box sx={{ margin: "16px" }} className={styles.container}>
            <motion.div
              whileInView={{
                x: [200, 0],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", loop: Infinity }}
            >
              <Box sx={{ margin: "16px" }} className={styles.divBox}>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ marginTop: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
              </Box>
            </motion.div>
          </Box>
          <Box sx={{ margin: "16px" }} className={styles.container}>
            <motion.div
              whileInView={{
                x: [200, 0],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, ease: "easeInOut", loop: Infinity }}
            >
              <Box sx={{ margin: "16px" }} className={styles.divBox}>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ marginTop: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RoadMap;
