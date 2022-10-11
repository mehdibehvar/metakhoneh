import { Popup, Marker, useMapEvents } from "react-leaflet"
import { useState } from 'react';
import { LatLng, LocationEvent } from "leaflet";

function FlyToUserLocation() {
    const [position, setPosition] = useState<LatLng|null>(null)
    const map = useMapEvents({
     click() {
        map.locate()
      },
      locationfound(e:LocationEvent) {
        console.log('location found:')
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
      locationerror(er){
        console.log(er);
        
      },
      
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>موقعیت فعلی شما</Popup>
      </Marker>
    )
  }
  export default FlyToUserLocation