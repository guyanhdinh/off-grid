import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHomePricing() {
  const { currentHome } = useOutletContext();
  return (
    <h3 className="host-home-price">
      ${currentHome.price}
      <span>/night</span>
    </h3>
  );
}

export default HostHomePricing;
