import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({}) => (
  <div className="text-orange-700 text-2xl">
    {<FaMapMarkerAlt></FaMapMarkerAlt>}
  </div>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 23.7771,
      lng: 90.3994,
    },
    zoom: 11,
  };

  return (
    <div className="w-2/4 mx-auto m-10 border border-8 p-3 rounded-lg border-indigo-700">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_APIKEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
