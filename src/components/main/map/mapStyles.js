const mapStyles = {
  map: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    flexDirection: 'column',
  },
  legend: { width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'start', paddingTop: 0 },
  legendItem: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  legendColor: (color) => ({ width: '100%', height: '10px', bgcolor: color }),
};
export { mapStyles };
