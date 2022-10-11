import { LatLng, LocationEvent } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents, Polyline } from "react-leaflet";
 function UserLocation() {
    const [position, setPosition] = useState<LatLng|null>(null)
      ///----///
      const map = useMapEvents({
        load() {
        map.locate()
        },
        locationfound(e:LocationEvent) {
       setPosition(e.latlng)
        },
      });
      // const polyline:LatLngExpression[] | LatLngExpression[][] =position? [
      //   [30.958545596786156, 51.25635877846443],
      //   position,
      // ]:[
      //   [30.958545596786156, 51.25635877846443],
      // ]
      // const limeOptions = { color: 'lime' }
      /////-------------------////
      return position === null ? null : (<>
         <Marker position={position}>
          <Popup>موقعیت فعلی شما</Popup>
        </Marker>
     {/* <Polyline pathOptions={limeOptions} positions={polyline} /> */}
      </>
     
      )
}
export default UserLocation;