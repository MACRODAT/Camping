import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useSelector } from "react-redux";
import "leaflet-routing-machine";
import Leaflet from "react-leaflet";
import RoutingMachine from "./QuickRoutes";
import { LatLng, Routing, latLng, map } from "leaflet";

const RecenterAutomatically = ({lat,lng}) => {
	const map = useMap();
	map.flyTo([lat, lng], 10)
	return null;
}

const QuickMap = () => {
  const position = [34, -6]

  const dep = useSelector((state) => state.dep);
  const arr = useSelector((state) => state.arr);
  
  const [pos, setPos] = useState(-1);
  const [deppoint, setDeppoint] = useState(position);
  const [arrpoint, setArrpoint] = useState(position);

  useEffect(() => {
	if (dep != null && (dep.lat != deppoint[0] || dep.lng != deppoint[1]))
	{
		setDeppoint([dep.lat, dep.lng])
		setPos(0);
		
		if (mapRef.current) {
			mapRef.current.setWaypoints(deppoint);
		}
	}
	else if (arr != null && (arr.lat != arrpoint[0] || arr.lng != arrpoint[1]))
	{
		setArrpoint([arr.lat, arr.lng])
		setPos(1);
		if (mapRef.current) {
			mapRef.current.setWaypoints(arrpoint);
		}
	}
	else
	{
		setPos(-1);
	}
	return () => {
		
	}
  }, [dep, arr]);

  const mapRef = useRef(null);

  setInterval(() => {
	console.log("[W] ", dep, arr);
  }, 10000);

  return (
    <div style={{ height: '100%', width: '100%' }}>
		<MapContainer 
			style={{ width: "100%", height: "100%" }} 
			zoom={13} 
			// whenCreated={map => (mapRef.current = map) }
			center={deppoint}
			scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<RoutingMachine ref={mapRef} waypoints={[deppoint, arrpoint]} />	
				{
					// <RoutingMachine map={mapRef.current} departure={deppoint} arrival={arrpoint} />
					// pos >=0 ? <RoutingMachine departure={deppoint} arrival={arrpoint} /> : <></>
				}
				<Marker position={deppoint} interactive={true} title="Start point" keyboard={true} >
					<Popup>
						Start place. <br /> This is where your trip begins.
					</Popup>
				</Marker>
				{
					pos == 0 ?
					<RecenterAutomatically lat={deppoint[0]} lng={deppoint[1]} /> : <></>
				}
				<Marker position={arrpoint} interactive={true} title="End point" keyboard={true}>
					<Popup>
						Arrival point. <br /> If you need to return to start point, select two way.
					</Popup>
				</Marker>
				{
					pos == 1 ?
					<RecenterAutomatically lat={arrpoint[0]} lng={arrpoint[1]} /> : <></>
				}
		</MapContainer>
    </div>
  );
}

export default QuickMap;