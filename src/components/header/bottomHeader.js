import React, { Fragment } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { isEmpty } from 'lodash';
import { headerStyles } from './headerStyles';

const pages = [
  {
    name: 'ABOUT',
    more: ['our story', 'missions and values', 'our customers', 'project and studies', 'meet our people', 'join us'],
  },
  {
    name: 'PRODUCTS & SERVICES',
    more: ['consulting', 'data ', 'research', 'h2020', 'Europe 5G Readiness Index', 'ten webapp'],
  },
  {
    name: 'PROGNOSIS',
    more: [],
  },
  {
    name: 'NEWS',
    more: ['newsroom', 'newsletter'],
  },
  {
    name: 'KNOWLEDGE CENTER',
    more: [],
  },
  {
    name: 'CONTACT',
    more: [],
  },
];

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
  const [expanded, setExpanded] = React.useState(false);
  const [move, setMove] = React.useState(false);

  const handleMove = () => setMove(window.scrollY > 0);
  // useEffect for scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleMove);
    return () => {
      window.removeEventListener('scroll', handleMove);
    };
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={headerStyles.appBar(move)}>
      <Box sx={headerStyles.bHeaderContainer}>
        <Toolbar disableGutters sx={headerStyles.toolbar}>
          <Box as="img" src={move ? 'Logo_incites_sticky.png' : 'INCITES_SA_logo.png'} sx={headerStyles.img(move)} />

          <Box sx={headerStyles.expandMore}>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <MenuIcon fontSize="16px" />
            </ExpandMore>
          </Box>

          <Box sx={headerStyles.menu} onMouseLeave={handleCloseUserMenu}>
            {pages.map((page) => (
              <Box key={page.name} sx={{ zIndex: anchorElUser && 100000 }} onClick={handleCloseUserMenu}>
                <Button onMouseEnter={handleOpenUserMenu} id={page.name} sx={headerStyles.menuButton}>
                  {page.name}
                </Button>
                {!isEmpty(page.more) && (
                  <Menu
                    onMouseLeave={handleCloseUserMenu}
                    id={`${page.name}-more`}
                    sx={headerStyles.menuDropdown}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    open={Boolean(anchorElUser?.id === page.name)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box onMouseLeave={handleCloseUserMenu}>
                      {page.more.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu} sx={headerStyles.menuItem}>
                          <Typography textAlign="center">{setting.toUpperCase()}</Typography>
                        </MenuItem>
                      ))}
                    </Box>
                  </Menu>
                )}
              </Box>
            ))}
            <SearchIcon sx={headerStyles.search} />
          </Box>
        </Toolbar>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={headerStyles.collapse}>
        {pages.map((page) => (
          <Fragment key={page.name}>
            {page.name === 'PROGNOSIS' && <Divider variant="middle" sx={{ bgcolor: '#EAB200' }} />}
            <MenuItem key={page.name}>
              <Typography textAlign="center">{page.name}</Typography>
            </MenuItem>
          </Fragment>
        ))}
      </Collapse>
    </AppBar>
  );
};

export { BottomHeader };
