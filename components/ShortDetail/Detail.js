import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import styles from './Detail.module.css'
import Typography from '@mui/material/Typography'
import WarningIcon from '@mui/icons-material/Warning';
import { IconButton } from '@mui/material'

const msg = [1, 2, 3, 4]
const Detail = () => {
    return (
        <Box>
            <Box className={styles.Flex}>
                <Button variant='contained' color='error' className={styles.Button}>Live</Button>
                <Box>
                    <Typography variant="body1" sx={{ color: 'white' }}>Operational Status</Typography>
                    <Typography variant="body2" sx={{ color: 'white' }}>Status :  High Priority</Typography>
                </Box>
            </Box>
            <Box className={styles.Rectangle}>
                <Box className={styles.RectangleBox}>
                    <Box className={styles.RectangleBorder}>
                        <Box className={styles.ScrollText}>
                            {msg.map((index) =>
                                <Box className={styles.FlexBox} key={index}>
                                    <Button size='small' color='error' className={styles.WarnBtn} endIcon={<WarningIcon fontSize='small' />}>Warning</Button>
                                    <Typography variant="subtitle1" sx={{ color: 'white' }}>Rice Supply Level Below 7% capacity</Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Typography variant="caption" sx={{color: 'white', ml:3}}>CODE ID NO: 01129872389739</Typography>
        </Box>
    )
}

export default Detail