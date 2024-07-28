import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
export default function Test() {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  const Map = () => {
    return (
      <iframe
        src="http://maps.google.com/maps?z=12&t=m&q=loc:38.9419+-78.3020"
        width={300}
        height={150}
        allowfullscreen
      ></iframe>
    );
  };
  return <Map />;
}
