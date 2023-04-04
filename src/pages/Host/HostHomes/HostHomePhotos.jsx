import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHomePhotos() {
  const { currentHome } = useOutletContext();
  return (
    <img src={currentHome.imageUrl} className="host-home-detail-image" alt="" />
  );
}

export default HostHomePhotos;
