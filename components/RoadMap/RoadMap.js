import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './RoadMap.module.css'
import {useInView } from 'react-intersection-observer'



const RoadMap = () => {

    const { ref: myRef1, inView : visible1 } = useInView();
    const { ref: myRef2, inView : visible2 } = useInView();
    const { ref: myRef3, inView : visible3 } = useInView();

    return (
        <Box sx={{ position: 'relative' }} >
            <Typography variant="h4" className={styles.RoadMap} sx={{ color: 'white', width: '100%', textAlign: 'center', fontSize: {xs: '30px', sm: '35px', md: '60px '}, my:2 }}>[ROAD MAP]</Typography>
            <Box className={styles.Road} sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                <Box className={styles.Launch} sx={{width: {md: '50%', xs: '100%'}, m: 2, mr:3}}>
                    <Typography variant="h4" className={styles.RoadMap2} sx={{ color: 'white',fontSize: {xs: '20px', sm: '30px', md: '40px '} }}>[Launch Beta V1.0]</Typography>
                    <Typography variant="h5" sx={{ color: 'white',fontSize: {xs: '20px', sm: '30px', md: '40px '} }}>ETA September , 2022</Typography>
                </Box>
                <Box className={styles.timeline} sx={{width: {md: '50%', xs: '100%'}}}>
                    <Box ref={myRef1} className={`${styles.container} ${styles.right}`}>
                        <Box className={`${styles.content} ${visible1? styles.slideLeft: ''}`}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>
                    <Box ref={myRef2} className={`${styles.container} ${styles.right}`}>
                        <Box className={`${styles.content} ${visible2? styles.slideLeft: ''}`}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>
                    <Box ref={myRef3} className={`${styles.container} ${styles.right}`}>
                        <Box className={`${styles.content} ${visible3? styles.slideLeft: ''}`}>
                            <Typography variant="body1" sx={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default RoadMap