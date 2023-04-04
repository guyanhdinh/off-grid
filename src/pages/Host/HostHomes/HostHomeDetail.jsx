import React, { Suspense } from "react";
import {
  Link,
  Outlet,
  NavLink,
  defer,
  useLoaderData,
  Await,
} from "react-router-dom";
import { getHome } from "../../../api/firebase";

export function loader({ params }) {
  return defer({ home: getHome(params.id) });
}

function HostHomeDetail() {
  const activeInfo = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const loaderData = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all homes</span>
      </Link>
      <Suspense fallback={<h2>Loading home...</h2>}>
        <Await resolve={loaderData.home}>
          {(currentHome) => (
            <div className="host-home-detail-layout-container">
              <div className="host-home-detail">
                <img src={currentHome.imageUrl} alt="" />
                <div className="host-home-detail-info-text">
                  <i className={`home-type ${currentHome.type}`}>
                    {currentHome.type}
                  </i>
                  <h3>{currentHome.name}</h3>
                  <h4>{currentHome.location}</h4>
                  <h4>${currentHome.price}/night</h4>
                </div>
              </div>
              <nav className="host-home-detail-nav">
                <NavLink
                  to="."
                  end
                  style={({ isActive }) => (isActive ? activeInfo : null)}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  style={({ isActive }) => (isActive ? activeInfo : null)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  style={({ isActive }) => (isActive ? activeInfo : null)}
                >
                  Photos
                </NavLink>
              </nav>
              <Outlet context={{ currentHome }} />
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
}

export default HostHomeDetail;
