import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  loadingIndicator: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

const LoadingIndicator = () => {
  const styles = useStyles();

  return (
    <Box className={styles.loadingIndicator}>
      <CircularProgress />
    </Box>
  );
};

export { LoadingIndicator };
