import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import styles from './faq.module.css'


function FAQList({ title, detail, number }) {
    return (
        <Box>
            <Box className={styles.Shadow}>
                <Box className={styles.Yellow}>
                    <Accordion className={styles.Accordion}>
                        <AccordionSummary
                            expandIcon={<Box><Typography variant="h4" sx={{ fontSize: { xs: '20px', sm: '30px', md: '40px ' } }} className={styles.Question}>{number}</Typography></Box>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography variant="h5" sx={{ color: 'white', fontSize: { xs: '16px', sm: '18px', md: '23px ' } }}>{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ color: 'white', mb: 3 }} variant="body1">
                                {detail}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
}

const FAQ = () => {
    return (
        <Box>
            <Typography variant="h3" className={styles.FAQ} sx={{ textAlign:'center',mt:'4rem',fontSize: { xs: '25px', sm: '35px', md: '50px ' },color:'white' }}>FAQs</Typography>
            <Box>
                <FAQList title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='01' />
                <FAQList title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='02' />
                <FAQList title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='03' />
                <FAQList title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='04' />
                <FAQList title='< This is a question? />' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.' number='05' />
            </Box>

        </Box>)
}

export default FAQ