import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select, ThemeProvider } from '@mui/material'
import { FormControlWrapper, FormControl, Loading, Container, ListStyle, theme } from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
  

  const [elementRefs, setElementRefs] = useState([])

  useEffect(() => {
    setElementRefs((refs) => Array(places?.length).fill().map((_, index) => refs[index] || createRef()));
  }, [places])

  return (
    <ThemeProvider theme={theme}>
      <ListStyle>
        <Container>
          <Typography variant="h4">Restaurants, Hotels and Attractions around you</Typography>

          {isLoading ? (
            <Loading>
              <CircularProgress size="5rem" />
            </Loading>
          ) : (
            <>
              <FormControlWrapper>

                <FormControl>
                  <InputLabel>Type</InputLabel>
                  <Select value={type} onChange={(e) => setType(e.target.value)}>
                    {/* {console.log(type)} */}
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel>Rating</InputLabel>
                  <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                  </Select>
                </FormControl>

              </FormControlWrapper>

              <Grid container spacing={3}>
                {places?.map((place, index) => (
                  <Grid item xs={12}>
                    <PlaceDetails
                    key={index}
                    place={place}
                    selected={Number(childClicked) === index}
                    refProp={elementRefs[index]}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
        )}

        </Container>
      </ListStyle>
    </ThemeProvider>
  )
}

export default List