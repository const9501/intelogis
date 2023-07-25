import {MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';
import {useDispatch, useSelector} from "react-redux";
import {actions, selectRoutes} from "./redux/routesSlice";
import {Table, Typography} from "antd";
import SetBounds from "./components/SetBounds";
import Routing from "./components/Routing";

const {Title} = Typography
const columns = [
  {
    title: 'Маршрут',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Точка 1',
    render: (_, record) => `${record.points[0][0]}, ${record.points[0][1]}`,

    key: 'id',
  },
  {
    title: 'Точка 2',
    render: (_, record) => `${record.points[1][0]}, ${record.points[1][1]}`,
    key: 'id',
  },
  {
    title: 'Точка 3',
    render: (_, record) => `${record.points[2][0]}, ${record.points[2][1]}`,
    key: 'id',
  },
];
L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  iconAnchor: [15, 45]
});

const App = () => {

  const dispatch = useDispatch()

  const routes = useSelector(selectRoutes)

  return (
    <div className='wrapper'>

      <Table
        className='table'
        dataSource={routes}
        columns={columns}
        pagination={false}
        rowKey={record => record.id}
        rowSelection={{
          type: "radio",
          onChange: (id) => {
            dispatch(actions.setActiveRoute(...id))
          }
        }}
      />

      <div className='map-section'>

        <Title>Map</Title>

        <MapContainer center={[59.938955, 30.315644]} zoom={12}>
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          />
          <Routing/>
          <SetBounds/>
        </MapContainer>
      </div>

    </div>
  );
}

export default App;