import {
  Box,
  Button,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { mainStyles } from './styles/mainStyles';
import { Map } from './map/Map';
import { DATA } from '../../DATA';

const Main = () => {
  return (
    <Box>
      <Box sx={mainStyles.outerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Typography sx={mainStyles.listHeader}>Top-10 Countries</Typography>
            <List sx={{ padding: 0 }}>
              {DATA.slice(0, 10).map((item, i) => (
                <ListItem key={item.Country} disablePadding sx={mainStyles.listItem}>
                  <ListItemButton sx={mainStyles.listItemButton}>
                    <Grid container sx={mainStyles.gridContainer}>
                      <Grid item xs={12} sm={12} md={5}>
                        <ListItemText primary={`${i + 1} ${item.Country}`} sx={mainStyles.gridItemText} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={7} sx={mainStyles.gridItemPercentage}>
                        <ListItemText primary={`${item['Index Score'].toFixed(2)} %`} sx={mainStyles.gridItemText} />
                        <LinearProgress
                          variant="determinate"
                          sx={mainStyles.linearProgress}
                          value={item['Index Score']}
                        />
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button sx={mainStyles.viewCountries}>View all countries</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { Main };
