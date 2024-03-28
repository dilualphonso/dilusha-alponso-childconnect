import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ lat, lng, name }) => (
  <div className="pin" style={{ position: 'absolute', transform: 'translate(-50%, -50%)' }}>
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{name}</p>
  </div>
);

export default LocationPin;
