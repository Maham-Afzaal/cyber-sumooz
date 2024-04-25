"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import styles from './collection.module.css';


const collection = [
  {
    index: 1,
    src: "/Genesis/1.png",
    alt: "1",
  },
  {
    index: 2,
    src: "/Genesis/2.png",
    alt: "2",
  },
  {
    index: 3,
    src: "/Genesis/3.png",
    alt: "3",
  },
  {
    index: 4,
    src: "/Genesis/4.png",
    alt: "4",
  },
  {
    index: 5,
    src: "/Genesis/5.png",
    alt: "5",
  },
  {
    index: 6,
    src: "/Genesis/6.png",
    alt: "6",
  },
  {
    index: 7,
    src: "/Genesis/1.png",
    alt: "1",
  },
  {
    index: 8,
    src: "/Genesis/2.png",
    alt: "2",
  },
  {
    index: 9,
    src: "/Genesis/3.png",
    alt: "3",
  },
  {
    index: 10,
    src: "/Genesis/4.png",
    alt: "4",
  },
  {
    index: 11,
    src: "/Genesis/5.png",
    alt: "5",
  },
  {
    index: 12,
    src: "/Genesis/6.png",
    alt: "6",
  },
];

const collectionTwo = [
  {
    index: 6,
    src: "/Genesis/6.png",
    alt: "6",
  },
  {
    index: 5,
    src: "/Genesis/5.png",
    alt: "5",
  },
  {
    index: 4,
    src: "/Genesis/4.png",
    alt: "4",
  },
  {
    index: 3,
    src: "/Genesis/3.png",
    alt: "3",
  },
  {
    index: 2,
    src: "/Genesis/2.png",
    alt: "2",
  },
  {
    index: 1,
    src: "/Genesis/1.png",
    alt: "1",
  },
  {
    index: 7,
    src: "/Genesis/6.png",
    alt: "6",
  },
  {
    index: 8,
    src: "/Genesis/5.png",
    alt: "5",
  },
  {
    index: 9,
    src: "/Genesis/4.png",
    alt: "4",
  },
  {
    index: 10,
    src: "/Genesis/3.png",
    alt: "3",
  },
  {
    index: 11,
    src: "/Genesis/2.png",
    alt: "2",
  },
  {
    index: 12,
    src: "/Genesis/1.png",
    alt: "1",
  },
];
const CollectionSumos = () => {
  return (
    <Box className={styles.Grid}>
      <Box className={styles.Container}>
        <motion.div
        whileInView={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", loop: Infinity }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { xs: "25px", sm: "35px", md: "50px" },
            }}
          >
            [ THE NON-FUNGIES ]
          </Typography>
        </motion.div>
        <Typography
          variant="h6"
          className={styles.Neon}
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "50px " },
            top: { xs: "8px", sm: "15px" },
          }}
        >
          Genesis Collection
        </Typography>
      </Box>

      <Box className={styles.Container2}>
        <Box className={styles["Collection"] + " " + styles["slideLeft"]}>
          {collection.map((collect) => (
            <Box key={collect.index} className={styles.CollectBox}>
              <Image
                src={collect.src}
                alt={collect.alt}
                height={140}
                width={140}
                className={styles.Collect}
                layout="fixed"
              />
            </Box>
          ))}
        </Box>
        <Box className={styles["Collection"] + " " + styles["slideRight"]}>
          {collectionTwo.map((collect) => (
            <Box key={collect.index} className={styles.CollectBox}>
              <Image
                src={collect.src}
                alt={collect.alt}
                height={140}
                width={140}
                className={styles.Collect}
                layout="fixed"
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={styles.Container3}>
      <motion.div
        whileInView={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", loop: Infinity }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: { xs: "25px", sm: "35px", md: "50px" },
            }}
          >
          [ SEE WHITE PAPER V1.0 ]
          </Typography>
        </motion.div>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            width: { md: "60%", xs: "80%" },
            fontSize: { xs: "12px", sm: "14px", md: "16px " },
            my: 2,
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat exas ea commodo consequat nostrud
          exercitation ullamco.
        </Typography>
        <Box className={styles.ButtonShadow}>
          <Button variant="contained" color="info" className={styles.Button}>
            [Coming Soon]
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionSumos;
