import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHomeInfo() {
  const { currentHome } = useOutletContext();

  return (
    <section className="host-home-detail-info">
      <h4>
        Name: <span>{currentHome.name}</span>
      </h4>
      <h4>
        Category: <span>{currentHome.type}</span>
      </h4>
      <h4>
        Description: <span>{currentHome.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}

export default HostHomeInfo;
