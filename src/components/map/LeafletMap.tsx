import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FlyToUserLocation from "./FlyToUserLocation";
import UserLocation from "./UserLocation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { axiosGet } from "../../../utils/HTTPClient";
import { IProduct } from "../../../types";
import { dbData } from "../../../utils/db";
L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [16, 25],
});

const LeafletMap = () => {
  const center = { lat: 29.663014745480055, lng: 52.58230870010543 };
  const [products, setProducts] = useState<IProduct[] | null>(null);
  useEffect(() => {
    // axiosGet("products").then((resp) => {
    // });
    setProducts(dbData);
  }, []);

  return (
    <div className="leaflet_map">
      <MapContainer
        center={center}
        style={{ height: "80vh", width: "100vw" }}
        zoom={8}
        // scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {products?.map((product) => {
          const { coordinates } = product.address.location;
          const lat = coordinates[0].$numberDouble;
          const lng = coordinates[1].$numberDouble;
          
          return (
            <Marker
              key={product._id}
              position={[parseFloat(lat), parseFloat(lng)]}
            >
              <Popup>{product.address.street}</Popup>
            </Marker>
          );
        })}
        <UserLocation />
        <FlyToUserLocation />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
///Marker is used to display clickable/draggable icons on the map
