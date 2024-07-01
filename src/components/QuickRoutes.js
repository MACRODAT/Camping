// import L, { Routing, latLng, map } from "leaflet";
// import { createControlComponent } from "@react-leaflet/core";
// import "leaflet-routing-machine";

// // const createRoutineMachineLayer = ({depature, arrival}) => {
// //   console.log("------------------- CALL")
// //   if (depature == null || arrival == null) 
// //   {
// // 	console.log("empty")
// // 	return L.Routing.control({
		
// // 	});
// //   }
// //   console.log("adding route")
// //   const instance = L.Routing.control({
// //     position: 'topleft',
// //     waypoints: [
// //       L.latLng(depature[0], depature[1]),
// //       L.latLng(arrival[0], arrival[1])
// //     ],
// // 	lineOptions: {
// // 		styles: [
// // 		  {
// // 			color: '#757de8',
// // 		  },
// // 		],
// // 	},
// //   });

// //   return instance;
// // };

// // const RoutingMachine = createControlComponent(createRoutineMachineLayer);

// const RoutingMachine = ({departure, arrival}) => {
// 	let map_ = map()
// 	    //console.log("Mode: arrival", pos, arr);
// 		Routing.control({
// 			waypoints: [
// 			  latLng(departure),
// 			  latLng(arrival)
// 			]
// 	}).addTo(map_);
// }

// export default RoutingMachine;

// import { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet-routing-machine';

// const RoutingMachine = ({ map, departure, arrival }) => {
//   useEffect(() => {
// 	  console.log("Use effect +++++++++", map)
// 	if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(departure[0], departure[1]),
//         L.latLng(arrival[0], arrival[1])
//       ],
//       routeWhileDragging: true,
//     }).addTo(map);

//     return () => map.removeControl(routingControl);
//   }, [map, departure, arrival]);

//   return null;
// };

// export default RoutingMachine;

import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const { waypoints } = props;
  console.log("updating.....[+]", waypoints)
  const instance = L.Routing.control({
    // waypoints: waypoints
  });
  

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);



export default RoutingMachine;