import { createTheme, alpha } from '@mui/material/styles';
import { styled } from '@mui/system';

const theme = createTheme();

const Toolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: "-10px",
  width: "100%",

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Title = styled('div')(({ theme }) => ({
  flexGrow: 1,
  fontSize: "1.5rem",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: "1rem",
    marginRight: 0,
    '@media (max-width: 420px)': {
        fontSize: "0.7rem",
    }
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '220px',
  },
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    marginLeft: 0,
    marginRight: 0,
  },
}));

const SearchIcon = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InputRoot = styled('div')({
  color: 'inherit',
  flexGrow: 1,
  padding: theme.spacing(0),
});

const InputInput = styled('input')(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
  boxSizing: 'border-box',
  color: 'inherit',
  paddingLeft: `calc(1em + ${theme.spacing(2)})`,
}));

export { theme, Toolbar, Title, Search, SearchIcon, InputRoot, InputInput };
