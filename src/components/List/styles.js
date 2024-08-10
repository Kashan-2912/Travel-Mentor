import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  spacing: 8,
});

const FormControl = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const FormControlWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '10px',
  },
});

const Loading = styled('div')({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
});

const Container = styled('div')({
  padding: '25px',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
});

const ListStyle = styled('div')({
  height: '90vh',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    height: '70vh',
  },
});

export { FormControlWrapper, theme, FormControl, Loading, Container, ListStyle };
