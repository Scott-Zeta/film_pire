import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  link: {
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  image: {
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    margin: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
}));
