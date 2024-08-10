import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Typography, InputBase, Box, ThemeProvider, MenuItem, Paper, ClickAwayListener } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar, Title, Search, SearchIcon as StyledSearchIcon, InputRoot, InputInput, theme } from './styles.js';
import Logo from '../../image/logo.png';

const Header = ({ setCoordinates }) => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);

  const fetchSuggestions = async (query) => {
    if (query.trim() !== '') {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`);
      const data = await response.json();
      setSuggestions(data);
      setIsDropdownOpen(true);
    } else {
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    fetchSuggestions(query);
  };

  const handleSelectSuggestion = (suggestion) => {
    const { lat, lon } = suggestion;
    setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lon) });
    setSearch(suggestion.display_name);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  const handleClickAway = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDropdownOpen]);

  return (
    <>
      <AppBar position='static'>
        <ThemeProvider theme={theme}>
          <Toolbar>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '70px', height: '70px', marginRight: '16px' }}
            />
            <Title variant='h5'>
              Travel Mentor
            </Title>

            <Box display="flex" alignItems="center">
              <Title variant='h5'>
                Let's Explore Places
              </Title>

              <Search>
                <StyledSearchIcon>
                  <SearchIcon />
                </StyledSearchIcon>
                <InputBase
                  ref={inputRef}
                  placeholder="Search..."
                  value={search}
                  onChange={handleSearchChange}
                  classes={{ root: InputRoot, input: InputInput }}
                />
              </Search>

              {isDropdownOpen && suggestions.length > 0 && (
                <ClickAwayListener onClickAway={handleClickAway}>
                <Paper style={{
                  position: 'absolute',
                  top: '60px',
                  left: '0.5',
                  right: '0.5',
                  zIndex: 10,
                  width: "70%",
                  overflow: 'hidden'
                }}>
                  {suggestions.map((suggestion, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleSelectSuggestion(suggestion)}
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {suggestion.display_name}
                    </MenuItem>
                  ))}
                </Paper>
              </ClickAwayListener>
              )}
            </Box>
          </Toolbar>
        </ThemeProvider>
      </AppBar>
    </>
  );
}

export default Header;
