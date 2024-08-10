import React from 'react';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

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

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '120px',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(1),
  },
}));

const MapContainer = styled('div')(({ theme }) => ({
  height: '85vh',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    height: '70vh',
    width: '100%',
  },
}));

const MarkerContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  '&:hover': { zIndex: 2 },
  borderColor: theme.palette.secondary.main,
}));

const Pointer = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.text.primary,
}));

export { theme, CustomPaper, MapContainer, MarkerContainer, Pointer };
