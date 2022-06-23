import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './RoadMap.module.css'



const RoadMap = () => {
    return (
        <Box sx={{ position: 'relative' }} >
            <Typography variant="h4" className={styles.RoadMap} sx={{ color: 'white', width: '100%', textAlign: 'center', fontSize: {xs: '25px', sm: '35px', md: '60px '} }}>[ROAD MAP]</Typography>
            <Box className={styles.Road} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                <Box className={styles.Launch} sx={{width: {md: '50%', xs: '100%'}, m: 2, mr:3}}>
                    <Typography variant="h4" className={styles.RoadMap2} sx={{ color: 'white',fontSize: {xs: '20px', sm: '30px', md: '40px '} }}>[Launch Beta V1.0]</Typography>
                    <Typography variant="h5" sx={{ color: 'white',fontSize: {xs: '20px', sm: '30px', md: '40px '} }}>ETA September , 2022</Typography>
                </Box>
                <Box className={styles.timeline} sx={{width: {md: '50%', xs: '100%'}}}>
                    <Box className={styles["container"] + " " + styles["right"]}>
                        <Box className={styles.content}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>
                    <Box className={styles["container"] + " " + styles["right"]}>
                        <Box className={styles.content}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>
                    <Box className={styles["container"] + " " + styles["right"]}>
                        <Box className={styles.content}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default RoadMap