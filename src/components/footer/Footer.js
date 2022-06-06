import {
  Box,
  Container,
  Grid,
  ImageListItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { footerStyles } from './footerStyles';
const Footer = () => {
  const w1200 = useMediaQuery('(min-width:1200px)');
  const w990 = useMediaQuery('(min-width:990px)');
  return (
    <Box sx={footerStyles.outerBox}>
      <Container fluid sx={{ padding: '40px 15px 0 15px', margin: '0 auto 50px' }}>
        <Grid container>
          <Grid container item sm={12} sx={footerStyles.gridContainer}>
            <Box sx={footerStyles.line} />
            <Grid item sm={8}>
              <ImageListItem sx={footerStyles.imageListItem(w1200, w990)}>
                <img src="logo_b-w.png" alt="logo" />
              </ImageListItem>
            </Grid>
            <Grid item sm={4} sx={footerStyles.gridList}>
              <List>
                <ListItemIcon sx={footerStyles.listItem}>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemIcon sx={footerStyles.listItem}>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemIcon sx={footerStyles.listItem}>
                  <FacebookIcon />
                </ListItemIcon>
              </List>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Typography>
              The content of the site reflects a general description of the company as well as its activities. There can
              be no guarantee that such information will be accurate in the future. No one should use this information
              without prior permission of INCITES.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="h6" component="h3" align="right">
              Contact information:
            </Typography>
            <List>
              <ListItem dense disablePadding sx={{ textAlign: 'right' }}>
                <ListItemText primary="130, Route d’ Arlon" />
              </ListItem>
              <ListItem dense disablePadding sx={{ textAlign: 'right', padding: 0 }}>
                <ListItemText primary="L-8008, Strassen - Luxembourg" />
              </ListItem>
              <ListItem dense disablePadding sx={footerStyles.listItem}>
                <ListItemIcon sx={footerStyles.listItem}>
                  <PhoneAndroidIcon />
                </ListItemIcon>
                <ListItemText primary="Tel: (+352) 27 44 96 68" sx={{ width: 'max-content', flex: '0 0 auto' }} />
              </ListItem>
              <ListItem dense disablePadding sx={footerStyles.listItem}>
                <ListItemIcon sx={footerStyles.listItem}>
                  <PhoneAndroidIcon />
                </ListItemIcon>
                <ListItemText sx={{ width: 'max-content', flex: '0 0 auto' }} primary="Tel: (+352) 20 60 12 66" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box sx={footerStyles.bottomBox}>
        <Box sx={footerStyles.adjustBox}>
          <Typography component="span" color="#777777">
            © Copyright 2020 - INCITES - All right reserved -
          </Typography>
          <Typography as="span" color="#AAAAAA" sx={footerStyles.bottomTypo}>
            &nbsp; Privacy policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Footer };
