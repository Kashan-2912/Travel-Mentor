import React, {useEffect} from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, ThemeProvider } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import Rating from '@mui/material/Rating'
import {theme, StyledChip} from './styles'
import DefaultImage from '../../image/DefaultImage.png'


const PlaceDetails = ({place, refProp, selected}) => {
  // console.log(place)

  useEffect(() => {
    if (selected && refProp?.current) {
      refProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selected, refProp]);
  return (
    <ThemeProvider theme={theme}>
      <Card ref={refProp} elevation={6}>
        <CardMedia
          style={{height: 350}}
          image={place.photo ? place.photo.images.large.url : DefaultImage}
          title={place.name}
        />

        <CardContent>
          <Typography gutterBottom variant='h5'>{place.name}</Typography>

          <Box display="flex" justifyContent="space-between">
            <Rating value={Number(place.rating)} readOnly />
            <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant='subtitle1'>Price</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>

          {/* render awards... a little bug here */}
          {place?.awards?.map((award) => (
              <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
              </Box>
            ))}
        
          {/* render cuisine */}
          {place?.cuisine?.map(({name}) => (
                <StyledChip size="small" label={name} />
          ))}

          {/* render address */}
          {place?.address && (
            <Box display="flex" alignItems="center" my={1}>
              <LocationOnIcon style={{ marginRight: 8 }} />
              <Typography gutterBottom variant="subtitle2" color="textSecondary">
                {place.address}
              </Typography>
            </Box>
          )}

          {/* render phone no */}
          {place?.phone && (
            <Box display="flex" alignItems="center" my={1}>
              <PhoneIcon style={{ marginRight: 8 }} />
              <Typography gutterBottom variant="subtitle2" color="textSecondary">
                {place.phone}
              </Typography>
            </Box>
          )}

          <CardActions>
            <Button size="small" color="primary"
             onClick={() => window.open(place.web_url, '_blank')}>
                Trip Advisor
             </Button>

             <Button size="small" color="primary"
             onClick={() => window.open(place.website, '_blank')}>
                Website
             </Button>
          </CardActions>


        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default PlaceDetails