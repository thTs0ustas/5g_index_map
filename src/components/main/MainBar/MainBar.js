import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Select, Typography } from '@mui/material';
import { MainSwitch } from '../../switch/switch';
import { useState } from 'react';

const MainBar = () => {
  const [selectValue, setSelectValue] = useState(true);
  return (
    <Box sx={{ bgcolor: '#EEE', paddingBottom: { sm: '7px' } }}>
      <Box sx={{ width: '77%', margin: '0 auto' }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl
              sx={{
                width: '100%',
              }}
            >
              <Select
                variant={'filled'}
                sx={{
                  borderRadius: 0,
                  borderLeft: '2px solid #fff',
                  borderRight: '2px solid #fff',
                  bgcolor: '#eee',
                  '& .MuiSelect-select': {
                    bgcolor: '#eee',
                    borderBottom: 'none',
                    padding: '8px 12px 25px',
                  },
                  '&:before': { borderBottom: 'none' },
                  '&:hover': { borderBottom: 'none', bgcolor: '#eee' },
                  '&:after': { borderBottom: 'none' },
                }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                marginTop: '7px',
                boxSizing: 'content-box',
                padding: '6px 12px',
                height: '20px',
                width: { xs: '100%', md: '100px', lg: '134px' },
                '&:hover': { bgcolor: '#e6e6e6', color: '#333', border: '1px solid #777', height: '18px' },
              }}
            >
              Report
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                marginTop: '7px',
                boxSizing: 'content-box',
                padding: '6px 12px',
                height: '20px',
                width: { xs: '100%', md: '100px', lg: '134px' },
                '&:hover': { bgcolor: '#e6e6e6', color: '#333', border: '1px solid #777', height: '18px' },
              }}
            >
              Report
            </Button>
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                marginTop: '7px',
                boxSizing: 'content-box',
                padding: '6px 12px',
                height: '20px',
                width: { xs: '100%', md: '100px', lg: '134px' },
                '&:hover': { bgcolor: '#e6e6e6', color: '#333', border: '1px solid #777', height: '18px' },
              }}
            >
              Report
            </Button>
          </Grid>
          <Grid item sm={12} md={2}>
            <Box
              sx={{
                marginTop: { xs: '7px', md: 0 },
                paddingBottom: '7px',
                width: '100%',
                bgcolor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <FormControlLabel
                onChange={() => setSelectValue(!selectValue)}
                sx={{ margin: 0 }}
                control={<MainSwitch sx={{ m: 1 }} />}
                label="Equal Weights"
              />
              {selectValue ? (
                <Typography sx={{ color: '#EAB200', textAlign: 'center' }} component="span">
                  Customize weights
                </Typography>
              ) : (
                <Box sx={{ height: '24px' }} component="span"></Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { MainBar };
