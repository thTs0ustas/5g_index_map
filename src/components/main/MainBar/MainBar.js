import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Select, Typography } from '@mui/material';
import { MainSwitch } from '../../switch/switch';
import { useState } from 'react';
import { mainStyles } from '../styles/mainStyles';
import { ModalCustomWeights } from './ModalCustomWeights';

const MainBar = () => {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={mainStyles.container}>
      <Box sx={mainStyles.outerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl sx={mainStyles.formControl}>
              <Select variant={'filled'} sx={mainStyles.select} inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button variant="contained" sx={mainStyles.mainBarButton}>
              Report
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button variant="contained" sx={mainStyles.mainBarButton}>
              Report
            </Button>
          </Grid>
          <Grid item xs={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button variant="contained" sx={mainStyles.mainBarButton}>
              Report
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Box sx={mainStyles.mainBarSwitch}>
              <FormControlLabel
                onChange={() => setSelectValue(!selectValue)}
                sx={{ margin: 0 }}
                control={<MainSwitch sx={{ m: 1 }} />}
                label="Equal Weights"
              />
              {selectValue ? (
                <Typography onClick={handleOpen} sx={mainStyles.mainBarGridItemText} component="span">
                  Customize weights
                </Typography>
              ) : (
                <Box sx={{ height: '24px' }} component="span"></Box>
              )}
            </Box>
            <ModalCustomWeights open={open} handleOpen={handleOpen} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { MainBar };
