import { Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Search } from '../../components';

const useStyles = makeStyles({
  container: {
    padding: 24,
    backgroundColor: '#f2f4f4',
    height: '100vh',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Main = () => {
  const styles = useStyles() as any;

  return (
    <Container className={styles.container}>
      <Box className={styles.topBar}>
        <Search />
      </Box>
    </Container>
  );
};

export { Main };
