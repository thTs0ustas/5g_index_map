import { IconButton, styled } from '@mui/material';

export const ExpandMore = styled((props) => {
  return <IconButton {...props} />;
})(({ theme, expand }) => ({
  color: '#21215D',
  fontSize: '2rem',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
