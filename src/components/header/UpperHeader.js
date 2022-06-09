import {
  Box,
  Button,
  List,
  ListItemIcon,
  // useMediaQuery
} from '@mui/material';
import PropTypes from 'prop-types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { headerStyles } from './HeaderStyles';

const UpperHeader = ({ show }) => {
  // const w1200 = useMediaQuery('(min-width:1200px)');
  // const w992 = useMediaQuery('(min-width:992px)');

  return (
    show && (
      <Box sx={headerStyles.container}>
        <Box sx={headerStyles.box}>
          <List>
            <ListItemIcon sx={headerStyles.listItem}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemIcon sx={headerStyles.listItem}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemIcon sx={headerStyles.listItem}>
              <FacebookIcon />
            </ListItemIcon>
          </List>
          <Button sx={headerStyles.button} startIcon={<PersonSharpIcon />} variant="text">
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
