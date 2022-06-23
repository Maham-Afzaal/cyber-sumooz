import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FAQ from '../Controls/FAQ'
import styles from './FAQS.module.css'

const FAQS = () => {
    return (
        <Box>
            <Box>
                <Typography variant="h3" className={styles.FAQ} sx={{fontSize: {xs: '25px', sm: '35px', md: '50px '}}}>FAQs</Typography>
                <Box>
                    <FAQ title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='01' />
                    <FAQ title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='02' />
                    <FAQ title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='03' />
                    <FAQ title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='04' />
                    <FAQ title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='05' />
                </Box>

            </Box>
        </Box>
    )
}

export default FAQS