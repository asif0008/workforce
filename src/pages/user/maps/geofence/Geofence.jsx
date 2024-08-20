import React from "react";
import Title from "../../../../components/shared/title/Title";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import AddIcon from "../../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../../assets/svgs/DeleteIcon";
import GeofencingList from "./GeofencingList";

const Geofence = () => {
  const position = [25.276987, 55.296249];
  return (
    <>
      <div className="bg-white rounded-[15px] p-4 lg:p-6">
        <div>
          <Title title="Map" />
        </div>
        <div className="mt-5 md:mt-8">
          <MapContainer
            center={position}
            zoom={6}
            style={{
              height: "480px",
              width: "100%",
              zIndex: 0,
              borderRadius: "20px",
            }}
            attributionControl={false}
          >
            <FeatureGroup>
              <EditControl
                position="topright"
                draw={{
                  polygon: true,
                  rectangle: false,
                  circle: false,
                  polyline: false,
                  marker: false,
                  circlemarker: false,
                }}
              />
            </FeatureGroup>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Location Dubai</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="bg-white rounded-[15px] p-4 lg:p-6 mt-4 md:mt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Title title="All Geofencing" />
          </div>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer"
              onClick={() => modalOpenHandler("add")}
            >
              <AddIcon />
            </div>
            <div className="cursor-pointer">
              <DeleteIcon />
            </div>
          </div>
        </div>
        <GeofencingList />
      </div>
    </>
  );
};

export default Geofence;
