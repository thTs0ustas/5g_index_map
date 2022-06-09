import { Box } from '@mui/system';
import { sideButtonStyles } from './sideButtonStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const SideButtons = () => {
  return (
    <Box sx={sideButtonStyles.container}>
      <Box sx={sideButtonStyles.button}>
        <LinkedInIcon sx={sideButtonStyles.icons} />
      </Box>
      <Box sx={sideButtonStyles.button}>
        <TwitterIcon sx={sideButtonStyles.icons} />
      </Box>
      <Box sx={sideButtonStyles.button}>
        <FacebookIcon sx={sideButtonStyles.icons} />
      </Box>
    </Box>
  );
};

export { SideButtons };
