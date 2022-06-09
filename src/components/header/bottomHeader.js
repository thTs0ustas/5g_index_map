import React, { Fragment } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { isEmpty } from 'lodash';
import { headerStyles } from './headerStyles';
import { Accordion, AccordionSummary, AccordionDetails } from './accordions/headerAccordions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pages } from './PAGES';
import { ExpandMore } from './ExpandMore';

const BottomHeader = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [move, setMove] = React.useState(false);
  const [panelExpanded, setPanelExpanded] = React.useState(false);

  const width900 = useMediaQuery('(min-width: 900px)');

  const handleChange = (panel) => (event, newExpanded) => {
    setPanelExpanded(newExpanded ? panel : false);
  };

  const handleMove = () => setMove(window.scrollY > 0);
  // useEffect for scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleMove);

    return () => {
      window.removeEventListener('scroll', handleMove);
    };
  });

  React.useEffect(() => {
    console.log(width900);
    if (width900 && (panelExpanded || expanded)) {
      setExpanded(false);
      setPanelExpanded('');
    }
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
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
            {isEmpty(page.more) ? (
              <MenuItem key={page.name} sx={headerStyles.menuButton2}>
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ) : (
              <Accordion key={page.name} expanded={panelExpanded === page.name} onChange={handleChange(page.name)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${page.name}-content`}
                  id={`${page.name}-header`}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {page.more.map((setting) => (
                    <MenuItem key={setting}>
                      <Typography textAlign="center">{setting.toUpperCase()}</Typography>
                    </MenuItem>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
          </Fragment>
        ))}
      </Collapse>
    </AppBar>
  );
};

export { BottomHeader };
