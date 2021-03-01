import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    background: '#fff',
    borderRadius: '16px',
    height: '100%',
    padding: '100px',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerButton: {
    maxWidth: '220px',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
