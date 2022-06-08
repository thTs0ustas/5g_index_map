const footerStyles = {
  outerBox: { bgcolor: '#EEE' },
  container: { width: '77%', padding: '40px 30px', margin: '0 auto' },
  gridContainer: { position: 'relative', marginBottom: '30px' },
  line: {
    margin: '0 auto',
    backgroundColor: '#555',
    height: '2px',
    width: '70vw',
    minWidth: '200px',
    maxWidth: '1000px',
    position: 'absolute',
    top: '62%',
    right: '0',
  },
  gridList: { display: 'flex', justifyContent: 'end' },
  listItem: {
    justifyContent: 'end',
    minWidth: '35px',
    width: 'auto',
    cursor: 'pointer',
    '&:hover': {
      color: '#EAB200',
    },
  },
  listItemText: { textAlign: 'right', padding: 0 },
  listItemWithIcon: { width: 'max-content', flex: '0 0 auto' },
  imageListItem: (big, small) => ({ width: big ? '185px' : !small ? '175px' : '151px' }),

  bottomBox: { bgcolor: '#333', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  adjustBox: { width: 800 },
  bottomTypo: { width: '60%' },
};

export { footerStyles };
