import { createTheme, styled } from '@mui/material/styles';
import { Chip, Box } from '@mui/material';

const theme = createTheme({});

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: '5px 5px 5px 0',
  [theme.breakpoints.down('sm')]: {
    margin: '2px 2px 2px 0',
  },
}));

const SubtitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const SpacingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export { theme, StyledChip, SubtitleBox, SpacingBox };
