const styles = {
  container: { bgcolor: '#EAB200', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  box: (w1200, w992) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    width: w1200 ? '1170px' : w992 ? '970px' : '750px',
  }),
  button: {
    width: '150px',
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      color: '#21215D',
      backgroundColor: '#EAB200',
    },
  },
  listItem: {
    minWidth: '35px',
    width: 'auto',
    cursor: 'pointer',
    '&:hover': {
      color: '#21215D',
    },
  },
};

export { styles };
