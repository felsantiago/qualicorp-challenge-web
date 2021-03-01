import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    background: '#fff',
    borderRadius: '16px',
    height: '100%',
    padding: '100px',
    margin: '0 auto',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& h2': {
      marginBottom: '20px',
    },
  },
  formCustomer: {
    width: '100%',
    maxWidth: '450px',

    '& input': {
      marginBottom: '8px',
    },

    '& button': {
      marginTop: '20px',
    },
  },

  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    color: '#41414d',
    fontSize: '16px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'opacity 0.2s',
  },
}));

export default useStyles;
