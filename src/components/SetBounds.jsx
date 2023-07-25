import {useMap} from "react-leaflet";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectActiveRoute} from "../redux/routesSlice";

const SetBounds = () => {

    const route = useSelector(state => selectActiveRoute(state))
    const map = useMap()

    useEffect(() => {
        route[0]?.points && map.fitBounds(route[0]?.points)
    }, [route, map])

    return (
        <>
        </>
    );
};

export default SetBounds;