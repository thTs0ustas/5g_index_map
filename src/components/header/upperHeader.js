import { Box, Button, List, ListItemIcon, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { styles } from './styles';

const UpperHeader = ({ show }) => {
  const w1200 = useMediaQuery('(min-width:1200px)');
  const w992 = useMediaQuery('(min-width:992px)');

  return (
    show && (
      <Box sx={styles.container}>
        <Box sx={styles.box(w1200, w992)}>
          <List>
            <ListItemIcon sx={styles.listItem}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemIcon sx={styles.listItem}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemIcon sx={styles.listItem}>
              <FacebookIcon />
            </ListItemIcon>
          </List>
          <Button sx={styles.button} startIcon={<PersonSharpIcon />} variant="text">
            Client Login
          </Button>
        </Box>
      </Box>
    )
  );
};
UpperHeader.propTypes = {
  show: PropTypes.bool,
};

export { UpperHeader };
