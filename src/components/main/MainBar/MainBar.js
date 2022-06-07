import { Box, Button, FormControl, Grid, MenuItem, Select } from '@mui/material';

const MainBar = () => {
  return (
    <Box sx={{ bgcolor: '#EEE' }}>
      <Box sx={{ width: '90%', margin: '0 auto' }}>
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
                  },
                  '&:before': { borderBottom: 'none' },
                  '&:hover': { borderBottom: 'none', bgcolor: '#eee' },
                  '&:after': { borderBottom: 'none' },
                }}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
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
                width: { sm: '100%', md: '100px', lg: '134px' },
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
                width: { sm: '100%', md: '100px', lg: '134px' },
                '&:hover': { bgcolor: '#e6e6e6', color: '#333', border: '1px solid #777', height: '18px' },
              }}
            >
              Report
            </Button>
          </Grid>
          <Grid item sm={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                marginTop: '7px',
                boxSizing: 'content-box',
                padding: '6px 12px',
                height: '20px',
                width: { sm: '100%', md: '100px', lg: '134px' },
                '&:hover': { bgcolor: '#e6e6e6', color: '#333', border: '1px solid #777', height: '18px' },
              }}
            >
              Report
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { MainBar };
