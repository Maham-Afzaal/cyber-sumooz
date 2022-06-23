import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styles from './Intro.module.css'
import Image from 'next/image'


const Intro = () => {
    return (
        <Box className={styles.Container}>
            <Box className={styles.ContainerShadow}>
                <Box className={styles.FirstContainer}>
                    <Box className={styles.SecondContainer}  sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                        <Box className={styles.ThirdContainer} >
                            <Box className={styles.ID}>
                                <Typography variant="body2" sx={{ color: 'white', ml: 3, display: {xs: 'none', md: 'block'} }}>ID NO: 01129872389739</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4" sx={{ color: 'white', mb: 2, fontSize: {xs: '20px', sm: '25px', md: '30px '} }}>Meet Po,</Typography>
                                <Typography variant="body2" sx={{ color: 'white', width: {xs: '90%', md: '70%'}, textAlign: 'justify' }}>Po is the hero of the Cyber Sumoz, the first true P2E PVP Battleverse Game on the Solana Blockchain. Po is a direct descendant of an ancient syndicate of 10,000 sumo warriors who were defeated by an evil entity named Akuma (big chungus mf...). Now Po and his fellow fighters must prevail and destroy Akuma in an exciting new but familiar battleverse gaming experience.</Typography>
                                <Box className={styles.ButtonShadow}>
                                    <Button variant="contained" color="info" className={styles.Button}>
                                        Twitter
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={styles.Sumo}>
                            <Image
                                src="/sumo.png"
                                alt="logo"
                                height={350}
                                width={350}
                            />
                        </Box>
                        {/* <Box className={styles.Play}>
                            <Image
                                src="/play.png"
                                alt="logo"
                                height={50}
                                width={50}
                            />
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Intro