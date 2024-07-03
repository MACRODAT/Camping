import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import "leaflet-routing-machine";
import RoutingMachine from "./QuickRoutes";
import axios from 'axios';
import { setIti, setRoute } from "../store/actions";

const RecenterAutomatically = ({lat,lng}) => {
	const map = useMap();
	map.flyTo([lat, lng], 10)
	return null;
}

const QuickMap = () => {
  const position = [34, -6]

  const dep = useSelector((state) => state.dep);
  const deleted_ = useSelector((state) => state.deletedWays);
  const arr = useSelector((state) => state.arr);

//   console.log(deleted_)
  
  const [pos, setPos] = useState(-1);
  const [deppoint, setDeppoint] = useState(position);
  const [arrpoint, setArrpoint] = useState(position);
  const [waypoints, setWaypoints] = useState([]);

  const [loop, setLoop] = useState();

  const dispatch = useDispatch();

  const fetchWaypoints = async (deppoint_, arrpoint_) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/getways', {
        params: {
          start_lat: deppoint_[0],
          start_lon: deppoint_[1],
          end_lat: arrpoint_[0],
          end_lon: arrpoint_[1],
          split_distance_km: 50
        }
      });
    //   setWaypoints(response.data);
	  return response.data;
    } catch (error) {
      console.log(error)
    }
  };

  let webber = (d, a) => {fetchWaypoints(d, a).then((val) => {
		if (val == null)
		{
			return;
		}
		let waypoints_ = val.waypoints
		let i = 0;
		while (i < deleted_.length)
		{
			waypoints_ = waypoints_.filter(w => w[0] != deleted_[i][0] || w[1] != deleted_[i][1])
			val.info = val.info.filter(w => w.latitude != deleted_[i][0] || w.longitude != deleted_[i][1])
			i = i + 1;
		}
		// console.log(waypoints_)
		mapRef.current?.setWaypoints(waypoints_);
		mapRef.current?.on('routesfound', function(e) {
			const routes = e.routes;
			dispatch(setRoute(routes));
		});
		dispatch(setIti(val));
	}, (err) => {
		console.log("[E] ", err)
	});
	}

  useEffect(() => {
	webber(deppoint, arrpoint)
  }, [deleted_])

  useEffect(() => {
	if (dep != null && (dep.lat != deppoint[0] || dep.lng != deppoint[1]))
	{
		setDeppoint([dep.lat, dep.lng])
		setPos(0);
		console.log("[M] ", [dep.lat, dep.lng], arrpoint);
		if (mapRef.current) {
			webber([dep.lat, dep.lng], arrpoint);
		}
	}
	else if (arr != null && (arr.lat != arrpoint[0] || arr.lng != arrpoint[1]))
	{
		setArrpoint([arr.lat, arr.lng])
		setPos(1);
		console.log("[M] ", deppoint, [arr.lat, arr.lng]);
		if (mapRef.current) {
			webber(deppoint, [arr.lat, arr.lng]);
		}
	}
	else
	{
		setPos(-1);
	}
	return () => {
		clearInterval(loop);
	}
  }, [dep, arr]);

  const mapRef = useRef(null);

  

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