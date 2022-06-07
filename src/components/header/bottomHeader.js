import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  // useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['ABOUT', 'PRODUCTS & SERVICES', 'PROGNOSIS', 'NEWS', 'KNOWLEDGE CENTER', 'CONTACT'];

const BottomHeader = () => {
  // const w1200 = useMediaQuery('(min-width:1200px)');
  // const w992 = useMediaQuery('(min-width:992px)');
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: { xs: 'start', md: 'center' } }}>
          <Box as="img" src={'INCITES_SA_logo.png'} sx={{ width: 175, margin: '15px 0' }} />

          <Box sx={{ justifyContent: 'flex-end', margin: '15px 0', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: '#21215D', fontSize: '2rem' }}
            >
              <MenuIcon fontSize="16px" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                onClick={handleCloseNavMenu}
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
    </AppBar>
  );
};

export { BottomHeader };
