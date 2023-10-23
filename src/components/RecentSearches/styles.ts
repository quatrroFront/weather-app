import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  recentSearches: {
    margin: '60px 0px 0px',
    padding: '16px 0',
  },
  header: {
    paddingBottom: 8,
  },
  item: {
    position: 'relative',
    cursor: 'pointer',
    minWidth: 100,
    height: 40,
    backgroundColor: '#c6e2f4',
    borderRadius: 6,
    lineHeight: '40px',
    textAlign: 'center',
    padding: '0 32px',
    margin: '0px 16px 8px 0px',
    '&:hover': {
      backgroundColor: '#79c8fa',
    },
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  clearIcon: {
    width: '18px !important',
    height: '18px !important',
    color: '#ffffff',
    position: 'absolute',
    right: 4,
    top: 4,
    '&:hover': {
      color: '#009bff',
    },
  },
});

export { useStyles };
