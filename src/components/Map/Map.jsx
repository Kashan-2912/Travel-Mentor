import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery, ThemeProvider } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DefaultImage from '../../image/DefaultImage.png';
import { theme, MapContainer, MarkerContainer, Pointer, CustomPaper } from './styles';
import Rating from '@mui/material/Rating'
import mapStyles from './mapStyles'

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('(min-width: 600px)');

  // console.log(weatherData)

  const handleMapChange = (e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  
    // for testing purposes
    // console.log('Coordinates Updated:', { lat: e.center.lat, lng: e.center.lng });
    // console.log('Bounds Updated:', { ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return (
    <ThemeProvider theme={theme}>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
          onChange={handleMapChange}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, index) => (
            <MarkerContainer
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <CustomPaper elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <Pointer src={place.photo ? place.photo.images.large.url : DefaultImage} alt={place.name} />

                  <Rating
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </CustomPaper>
              )}
            </MarkerContainer>
          ))}
        </GoogleMapReact>
      </MapContainer>
    </ThemeProvider>
  );
};

export default Map;
