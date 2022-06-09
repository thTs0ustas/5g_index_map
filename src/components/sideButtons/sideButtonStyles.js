const sideButtonStyles = {
  container: {
    zIndex: '1',
    width: '36px',
    height: '200px',
    position: 'fixed',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  button: {
    width: '100%',
    height: '46px',
    bgcolor: '#fff',
    borderRadius: '10px 0 0 10px',
    borderLeft: ' 1px solid #21215D',
    borderTop: '1px solid #21215D',
    borderBottom: '1px solid #21215D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    color: '#21215D',
    fontSize: '20px',
    padding: '10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#EAB200',
    },
  },
};

export { sideButtonStyles };
