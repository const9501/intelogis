import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import {useSelector} from "react-redux";
import {selectActiveRoute} from "../redux/routesSlice";
import {useMap} from "react-leaflet";
import {useEffect} from "react";

export default function Routing() {

  const map = useMap();

  const route = useSelector(state => selectActiveRoute(state))

  useEffect(() => {

    const waypoints = route[0]?.points.map(point => {
      return L.latLng(...point)
    })

    const routingControl = L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{color: "#6FA1EC", weight: 4}],
        extendToWaypoints: false,
        missingRouteTolerance: 1,
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      alternatives: false,
    }).addTo(map);


    return () => {
      if (routingControl) {
        routingControl.remove();
      }
    }

  }, [map, route]);

  return null;
}
