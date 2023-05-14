import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Accordion, Box, Typography, useTheme } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../themes';

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <>
    <Box>
      <PageTitle title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box>
          <Accordion sx={{mb:'20px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.green[500]}>
              An Important Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{mb:'20px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.green[500]}>
              Another Important Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{mb:'20px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.green[500]}>
              YOur Favorite  Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{mb:'20px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.green[500]}>
              Some Random Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{mb:'20px'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.green[500]}>
              The Final Question
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
      </Box>
    </Box>
    </>
  )
}
export default FAQ;
