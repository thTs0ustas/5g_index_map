import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  IconButton,
  // Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  // useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['ABOUT', 'PRODUCTS & SERVICES', 'PROGNOSIS', 'NEWS', 'KNOWLEDGE CENTER', 'CONTACT'];

const ExpandMore = styled((props) => {
  // const { expand, ...other } = props;
  return <IconButton {...props} />;
})(({ theme, expand }) => ({
  color: '#21215D',
  fontSize: '2rem',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BottomHeader = () => {
  // const w1200 = useMediaQuery('(min-width:1200px)');
  // const w992 = useMediaQuery('(min-width:992px)');
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: { xs: 'start', md: 'center' } }}>
          <Box as="img" src={'INCITES_SA_logo.png'} sx={{ width: 175, margin: '15px 0' }} />

          <Box sx={{ justifyContent: 'flex-end', margin: '15px 0', display: { xs: 'flex', md: 'none' } }}>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <MenuIcon fontSize="16px" />
            </ExpandMore>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'end',
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
              width: { md: '70%', lg: '80%' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  color: '#333',
                  display: 'block',
                  borderRadius: 0,
                  boxSizing: 'content-box',
                  fontSize: { md: '13px', lg: '16px' },
                  '&:hover': {
                    transform: 'translateY(1px)',
                    borderBottom: '2px solid #EAB200',
                    bgcolor: '#fff',
                  },
                }}
              >
                {page}
              </Button>
            ))}
            <SearchIcon sx={{ cursor: 'pointer', color: '#000' }} />
          </Box>
        </Toolbar>
      </Container>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{
          margin: '0 auto',
          width: '95%',
          color: '#666',
          bgcolor: '#1b1a1a',
          fontWeight: 600,
          '& .MuiTypography-root': {},
          fontSize: '16px',
        }}
      >
        {pages.map((page) => (
          <>
            {page === 'PROGNOSIS' && <Divider variant="middle" sx={{ bgcolor: '#EAB200' }} />}
            <MenuItem
              key={page}
              // onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          </>
        ))}
      </Collapse>
    </AppBar>
  );
};

export { BottomHeader };
