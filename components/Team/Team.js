import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Team.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <Box sx={{ marginTop: { xs: "2em", md: "4em" }, position: 'relative' }}>
      <Box className={styles.containerTeam}>
        <Box className={styles.dropShadow}>
          <Box className={styles.borderBox1}>
            <Box className={styles.borderBox2}>
              <Box sx={{ padding: {xs:'20px',md:"40px"} }}>
                <Box className={styles["GreyCircle"] + " " + styles["Circle3"]}></Box>
                <Typography variant="h4" className={styles.User}>
                  User
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4,}}>
                  <Box>
                    {" "}
                    <Typography
                      variant="h6"
                      className={styles.Lab}
                      sx={{ color: 'white', fontSize: { xs: "16px", sm: "20px", md: "25px " } }}
                    >
                      FOMO Labs Inc.
                    </Typography>
                    <Typography variant="subtitle1" className={styles.Lab2} color='white'>
                      Parent Developer
                    </Typography>
                  </Box>
                  <Box className={styles.Twitter} sx={{marginRight:'20px'}}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "white",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      [ Twitter ]
                    </Typography>
                    <Image src="/QR.png" alt="logo" height={30} width={40} />
                  </Box>
                </Box>
                <Typography color='white'>This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites.</Typography>

              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.backgroud}></Box>
        <Box className={styles.Box2Line}>
          <Box className={styles.box2Shadow}>
            <Box className={styles.blueBox}>
              <Box className={styles.blackBox}>
                <Box className={styles["GreyCircle"] + " " + styles["Circle1"]}></Box>
                <Box className={styles["GreyCircle"] + " " + styles["Circle2"]}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{mt:'3em',textAlign:'center'}}>
        <Typography color='white'>NOTE: Each NFT character will be minted with one special attack and one celebratory emote. However, players can collect additional abilities by playing the game, and can even buy, resell and trade in the game’s player-owned economic ecosystem.</Typography>
      </Box>
    </Box>
  );
};

export default Team;
