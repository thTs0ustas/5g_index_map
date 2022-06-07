const styles = {
  container: { bgcolor: '#EAB200', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    width: '77%',
  },
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
