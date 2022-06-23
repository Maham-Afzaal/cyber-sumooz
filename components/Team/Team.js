import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import styles from './Team.module.css'
import IconButton from '@mui/material/IconButton'

import NextIcon from '@mui/icons-material/NavigateNext';
import BeforeIcon from '@mui/icons-material/NavigateBefore';





const Team = () => {
    return (
        <Box className={styles.Container}>

            <Box >
                <Box className={styles.FlexBox}>
                    <Box className={styles.DetailBox}>
                        <Box className={styles.BlueBox}>
                            <Box className={styles.GreyBox}>
                                <Box className={styles["GreyCircle"] + " " + styles["Circle3"]}></Box>
                                <Typography variant="h4" className={styles.User}>User</Typography>
                                <Box className={styles.Box}>
                                    <Box>
                                        <Typography variant="h6" className={styles.Lab} sx={{fontSize: {xs: '16px', sm: '20px', md: '25px '}}}>FOMO Labs Inc.</Typography>
                                        <Typography variant="subtitle1" className={styles.Lab2}>Parent Developer</Typography>
                                    </Box>
                                    <Box className={styles.Twitter}>
                                        <Typography variant="subtitle1" sx={{ color: "white", display: {xs: 'none', sm: 'block'} }} >[ Twitter ]</Typography>
                                        <Image
                                            src="/QR.png"
                                            alt="logo"
                                            height={30}
                                            width={40}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" sx={{ color: "white", my: 3, textAlign: 'justify' }}>This is text about the team member and the role. This should include info about the role & responsibilites. This is text about the team member and the role. This should include info about the role & responsibilites.</Typography>
                                <Box sx={{ alignSelf: 'flex-end' }}>
                                    <IconButton variant='contained' className={styles.Button}>
                                        <BeforeIcon fontSize='large' />
                                    </IconButton>
                                    <IconButton variant='contained' className={styles.Button} sx={{ ml: 1 }}>
                                        <NextIcon fontSize='large' />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.Background}></Box>

                    <Box className={styles.Sumo}>
                        {/* <Image
                            src='/GenesisT/2.png'
                            alt="logo"
                            height={300}
                            width={300}
                            layout='fixed'
                        /> */}
                    </Box>
                    <Box className={styles.LeftHandle}>
                        <Box className={styles.LeftHandleBlue}>
                            <Box className={styles.LeftHandleGrey}>
                                <Box className={styles["GreyCircle"] + " " + styles["Circle1"]}></Box>
                                <Box className={styles["GreyCircle"] + " " + styles["Circle2"]}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.Note}>
                <Typography variant="body2" sx={{ color: 'white' }} className={styles.NoteDetail}>NOTE: Each NFT character will be minted with one special attack and one celebratory emote. However, players can collect additional abilities by playing the game, and can even buy, resell and trade in the game’s player-owned economic ecosystem.</Typography>
            </Box>
        </Box>
    )
}

export default Team