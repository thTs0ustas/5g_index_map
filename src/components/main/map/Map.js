// Use googles GeoChart API to create a map

import { Box, Typography } from '@mui/material';
import { Chart } from 'react-google-charts';
import { DATA } from '../../../DATA';
import './map.css';
import { mapStyles } from './mapStyles';

const data = [['Country', 'Index Score'], ...DATA.map((item) => [item.Country, item['Index Score']])];
console.log(data);
const options = {
  region: '150',
  displayMode: 'regions',
  dimension: 'region',
  matchType: 'equals',
  datalessRegionColor: 'transparent',
  colorAxis: {
    colors: ['#D4CDFF', '#AAA4EA', '#817DC0', '#5A5898', '#21215d'],
    minValue: 0,
    maxValue: 100,
  },
  legend: 'none',
};

const Map = () => {
  return (
    <Box sx={mapStyles.map}>
      <Chart
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();

              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log('Selected : ' + region);
            },
          },
        ]}
        chartType="GeoChart"
        data={data}
        options={options}
        height="600px"
        width="120%"
        className="map"
      />
      <Box sx={mapStyles.legend}>
        <Box sx={mapStyles.legendItem}>
          <Box sx={mapStyles.legendColor('#D4CDFF')} />
          <Typography>0-20%</Typography>
          <Typography>Very Low</Typography>
        </Box>
        <Box sx={mapStyles.legendItem}>
          <Box sx={mapStyles.legendColor('#AAA4EA')} />
          <Typography>21-40%</Typography>
          <Typography>Low</Typography>
        </Box>
        <Box sx={mapStyles.legendItem}>
          <Box sx={mapStyles.legendColor('#817DC0')} />
          <Typography>41-59%</Typography>
          <Typography>Medium</Typography>
        </Box>
        <Box sx={mapStyles.legendItem}>
          <Box sx={mapStyles.legendColor('#5A5898')} />
          <Typography>60-80%</Typography>
          <Typography>High</Typography>
        </Box>
        <Box sx={mapStyles.legendItem}>
          <Box sx={mapStyles.legendColor('#21215d')} />
          <Typography>81-100%</Typography>
          <Typography>Very High</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Map };
