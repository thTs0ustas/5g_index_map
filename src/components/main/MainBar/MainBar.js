import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Select, Typography } from '@mui/material';
import { MainSwitch } from '../../switch/switch';
import { useState } from 'react';
import { mainStyles } from '../styles/mainStyles';
import { ModalCustomWeights } from './ModalCustomWeights';
import ScienceIcon from '@mui/icons-material/Science';
import TableViewIcon from '@mui/icons-material/TableView';
import BookIcon from '@mui/icons-material/Book';

const MainBar = () => {
  const [open, setOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(true);
  const [selectValue2, setSelectValue2] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={mainStyles.container}>
      <Box sx={mainStyles.outerBox}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <FormControl sx={mainStyles.formControl}>
              <Select
                value={selectValue2}
                onChange={(e) => setSelectValue2(e.target.value)}
                variant={'filled'}
                sx={mainStyles.select}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={1} sx={mainStyles.menuItem}>
                  Option 1
                </MenuItem>

                <MenuItem sx={mainStyles.menuListItem} value={11}>
                  Sub Option 1
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={12}>
                  Sub Option 2
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={13}>
                  Sub Option 3
                </MenuItem>

                <MenuItem sx={mainStyles.menuItem} value={2}>
                  Option 2
                </MenuItem>
                <MenuItem sx={mainStyles.menuItem} value={3}>
                  Option 3
                </MenuItem>

                <MenuItem sx={mainStyles.menuListItem} value={14}>
                  Sub Option 1
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={15}>
                  Sub Option 2
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={16}>
                  Sub Option 3
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={17}>
                  Sub Option 4
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={18}>
                  Sub Option 5
                </MenuItem>
                <MenuItem sx={mainStyles.menuListItem} value={19}>
                  Sub Option 6
                </MenuItem>

                <MenuItem sx={mainStyles.menuItem} value={4}>
                  Option 4
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button startIcon={<BookIcon />} variant="contained" sx={mainStyles.mainBarButton}>
              Report
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button startIcon={<ScienceIcon />} variant="contained" sx={mainStyles.mainBarButton}>
              Methodology
            </Button>
          </Grid>
          <Grid item xs={12} md={2} sx={mainStyles.mainBarGridItem}>
            <Button startIcon={<TableViewIcon />} variant="contained" sx={mainStyles.mainBarButton}>
              Data
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
