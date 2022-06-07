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

const top10 = [
  { country: 'Finland', score: 70.95 },
  { country: 'Switzerland', score: 69 },
  { country: 'Germany', score: 66.68 },
  { country: 'Denmark', score: 65.93 },
  { country: 'Sweden', score: 65.91 },
  { country: 'United Kingdom', score: 65.26 },
  { country: 'Netherlands', score: 65.24 },
  { country: 'Norway', score: 64.08 },
  { country: 'Luxenbourg', score: 62.97 },
];

const Main = () => {
  return (
    <Box>
      <Box sx={{ width: '77%', margin: '0 auto' }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Typography sx={{ bgcolor: '#eab200', padding: '16px', color: '#fff', marginTop: '1em' }}>
              Top-10 Countries
            </Typography>
            <List sx={{ padding: 0 }}>
              {top10.map((item, i) => (
                <ListItem
                  key={item.country}
                  disablePadding
                  sx={{
                    bgcolor: '#f8f8f8',
                    padding: '7px 14px',
                    margin: '2.8px 0',
                    height: '59px',
                    '&:hover': {
                      backgroundColor: '#eab200',

                      cursor: 'pointer',
                    },
                    '&:last-child': { marginBottom: 0 },
                  }}
                >
                  <ListItemButton
                    sx={{
                      paddingTop: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        paddingTop: 0,
                      }}
                    >
                      <Grid item xs={12} sm={12} md={5}>
                        <ListItemText
                          primary={`${i + 1} ${item.country}`}
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: 300,
                              fontSize: '14px',
                              color: '#7f7f7f',
                            },
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: { sm: '0', md: '0 15px' },
                        }}
                      >
                        <ListItemText
                          primary={`${item.score.toFixed(2)} %`}
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: 600,
                              fontSize: '14px',
                              color: '#7f7f7f',
                            },
                          }}
                        />
                        <LinearProgress
                          variant="determinate"
                          sx={{
                            width: { sm: '90%', md: '50%' },
                            padding: { sm: '0' },
                            height: '20px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            bgcolor: '#fff',
                            boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 10%)',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#5a5898',
                            },
                          }}
                          value={item.score}
                        />
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button
              sx={{
                bgcolor: '#eab200',
                color: '#fff',
                borderRadius: '0 0 10px 10px',
                fontSize: '12px',
                fontWeight: 300,
              }}
            >
              View all countries
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
            Map
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { Main };
