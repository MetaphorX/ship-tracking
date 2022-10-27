import React, {useMemo} from 'react'
import GoogleMapReact from 'google-map-react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles'

const Map = () => {

  const { isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')
  
  const coordinates ={ lat: 0, lng: 0}

  

  if(!isLoaded)return <div>Loading...</div>
  return (<>
    
      <GoogleMap

        center={{ lat: 0, lng: 0}}
        zoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        
        mapContainerClassName={classes.mapContainer}
      >
        <Marker position={{ lat: 0, lng: 0}}/>
      </GoogleMap>

    
    
    </>
  )
}

export default Map