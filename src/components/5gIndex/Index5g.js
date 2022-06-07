import { Box, Breadcrumbs, Grid, Typography } from '@mui/material';

const Index5g = () => {
  return (
    <Box sx={{ width: '100%', borderTop: '2px solid #21215D', borderBottom: '2px solid #21215D' }}>
      <Grid container sx={{ width: '90%', margin: '0 auto' }}>
        <Grid item xs={12} sm={12} md={6} sx={{ padding: '30px 0' }}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ borderBottom: '2px solid #EAB200', textAlign: { xs: 'center', sm: 'center', md: 'left' } }}
          >
            Europe 5G Readiness Index
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ padding: '10px 0 15px 0' }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              '& .MuiBreadcrumbs-ol': {
                justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
                color: '#aaa',
                fontSize: '13px',
                lineHeight: 'normal',
                letterSpacing: '.02em',
                padding: 0,
                fontStyle: 'normal',
              },
            }}
          >
            <Typography color="text.primary">Home</Typography>
            <Typography color="text.primary">Europe 5G Readiness Index</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </Box>
  );
};
export { Index5g };
