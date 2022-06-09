const headerStyles = {
  container: { bgcolor: '#EAB200', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
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
  appBar: (move) => ({
    padding: 0,
    position: { xs: 'static', md: move ? 'fixed' : 'static' },
    bgcolor: '#fff',
    boxShadow: move ? '1px 1px 10px #000' : 'none',
  }),
  bHeaderContainer: { width: '77%', margin: '0 auto' },
  toolbar: { justifyContent: 'space-between', alignItems: { xs: 'start', md: 'center' } },
  img: (move) => ({ width: move ? 120 : 175, margin: '15px 0' }),
  expandMore: {
    justifyContent: 'flex-end',
    width: 0,
    height: 0,
    margin: '15px 0',
    display: { xs: 'flex', md: 'none' },
  },
  menuDropdown: {
    borderRadius: 0,
    mt: '60px',
    '& .MuiBackdrop-root': { width: 0, height: 0 },
    '& .MuiMenu-list': { padding: 0, borderRadius: 0 },
  },
  menu: {
    flexGrow: 1,
    justifyContent: 'end',
    alignItems: 'center',
    display: { xs: 'none', md: 'flex' },
    width: { md: '70%', lg: '80%' },
  },
  menuItem: {
    height: '55px',
    color: '#fff',
    margin: '0',
    bgcolor: '#21215d',

    '&:hover': {
      color: '#eab200',
      bgcolor: '#1B1A1A',
    },
    '& .Typography-root': {
      fontSize: '13px',
      fontFamily: 'Open Sans, sans-serif',
    },
    padding: '15px 25px',
  },
  search: { cursor: 'pointer', color: '#000' },
  collapse: {
    margin: '0 auto',
    width: '95%',
    color: '#666',
    bgcolor: '#1b1a1a',
    fontWeight: 600,
    '& .MuiTypography-root': {},

    fontSize: '16px',
  },
  menuButton: {
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
  },
};

export { headerStyles };
