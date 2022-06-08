import { Backdrop, Box, Button, Fade, Modal, Slider, Typography } from '@mui/material';
import { useState } from 'react';
import { find } from 'lodash';
import { mainStyles } from '../styles/mainStyles';

const data = [
  { title: 'Infrastructure and Technology', persentage: 22.5 },
  { title: 'Regulation and Policy', persentage: 22.5 },
  { title: 'Innovation Landscape', persentage: 15 },
  { title: 'Human Capital', persentage: 10 },
  { title: 'Country Profile', persentage: 12.5 },
  { title: 'Demand', persentage: 17.5 },
];

const ModalCustomWeights = ({ open, handleClose }) => {
  const [value, setValue] = useState([
    { title: 'Infrastructure and Technology', persentage: 22.5 },
    { title: 'Regulation and Policy', persentage: 22.5 },
    { title: 'Innovation Landscape', persentage: 15 },
    { title: 'Human Capital', persentage: 10 },
    { title: 'Country Profile', persentage: 12.5 },
    { title: 'Demand', persentage: 17.5 },
  ]);

  const handleChange = (event, index) => {
    setValue((prev) => {
      const newData = [...prev];
      newData[index].persentage = event.target.value;
      return [...newData];
    });
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={mainStyles.modalContainer}>
          <Box sx={mainStyles.modalHeader}>
            <Box>
              <Typography variant="h4" component="h2" sx={mainStyles.modalHeaderText}>
                Customize weights
              </Typography>
              <Typography variant="p" sx={mainStyles.modalHeaderText2}>
                Adjust desired weight, keep their sum to 100
              </Typography>
            </Box>
            <Button variant="outlined" onClick={handleClose} sx={mainStyles.closeButton}>
              ×
            </Button>
          </Box>
          <Box sx={mainStyles.resetButton}>
            <Button
              variant="contained"
              onClick={() => {
                setValue((prev) => {
                  const newData = [...prev];
                  newData.forEach((item) => {
                    const index = find(data, { title: item.title });
                    item.persentage = index.persentage;
                  });
                  return [...newData];
                });
              }}
            >
              Reset
            </Button>
          </Box>
          {value?.map((item, index) => (
            <Box key={item?.title} sx={mainStyles.sliderContainer}>
              <Box sx={mainStyles.sliderTextContainer}>
                <Typography gutterBottom sx={mainStyles.sliderText}>
                  {item?.title}
                </Typography>
                <Typography gutterBottom sx={mainStyles.sliderText}>
                  {item?.persentage}%
                </Typography>
              </Box>
              <Slider
                value={item?.persentage}
                name={item?.title}
                defaultValue={item?.persentage}
                onChange={(e) => handleChange(e, index)}
                sx={mainStyles.slider}
              />
            </Box>
          ))}
          <Typography variant="p" component="p" sx={mainStyles.summaryContainer}>
            SUM: {value.reduce((a, b) => a + b.persentage, 0)} %
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export { ModalCustomWeights };
