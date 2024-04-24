import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image'

import styles from './footer.module.css'
import { Container } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{display:'block'}}>
            <Box className={styles.Shadow}>
                <Box className={styles.Blue}>
                    <Box className={styles.FlexBox}>
                        <Container>
                            <Box className={styles.Box2}>
                                <Box className={styles.Box}>
                                    <Typography variant="h4" className={styles.Heading}>Join Community</Typography>
                                    <Typography variant="body1" sx={{ color: 'white', textAlign: 'justify' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturd cillum dolore eu fugiat.
                                    </Typography>
                                    <Box className={styles.ButtonBox}>
                                        <Box className={styles.ButtonShadow}>
                                            <Button variant="contained" size='large' color="info" className={styles.Button}>
                                                [ Join Discord ]
                                            </Button>
                                        </Box>
                                        <Box className={styles.ButtonShadow2}>
                                            <Button variant="contained" size='large' color="success" className={styles.Button2}>
                                                [ Join Twitter ]
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.Sumo}>
                                    <Image
                                        src="/sumo.png"
                                        alt="logo"
                                        height={270}
                                        width={270}
                                    />
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.BottomFooter} sx={{ display:'flex',justifyContent:'space-between',backgroundColor: 'black', color: 'white', p: 1, pl:5 }}>
            
                    <Typography variant="body1" >All Rights Reserved 2023</Typography>
                    <Typography variant="body1" >Maham Afzaal</Typography>
            </Box>
        </Box>
    )
}

export default Footer