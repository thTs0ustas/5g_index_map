import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(() => ({
  backgroundColor: '#1b1a1a',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(() => ({
  backgroundColor: '#1b1a1a',
  flexDirection: 'row-reverse',
  '& .MuiTypography-root': {
    FontFace: 'Open Sans, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: '#666',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color: '#393838',
  },
  ' & .MuiAccordionSummary-expandIconWrapper': {
    color: '#666',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '0 ',
  margin: '0 40px',
  backgroundColor: '#21215d',
  color: '#c2c2c2',
  '& .MuiMenuItem-root': {
    borderBottom: '1px solid #393838',
    '&:hover': {
      backgroundColor: '#1b1a1a',
      color: '#d5aa6d',
    },
  },
}));

export { Accordion, AccordionSummary, AccordionDetails };
