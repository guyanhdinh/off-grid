import React, { Suspense } from "react";
import { defer, Link, Await, useLoaderData } from "react-router-dom";
import { getHostHomes } from "../../../api/firebase";

export function loader() {
  return defer({ homes: getHostHomes() });
}

function HostHomes() {
  const loaderData = useLoaderData();

  function renderHostHomesElements(homes) {
    const hostHomesEls = homes.map((home) => (
      <Link to={home.id} key={home.id} className="host-home-link-wrapper">
        <div className="host-home-single" key={home.id}>
          <img src={home.imageUrl} alt={`Pic of ${home.name}`} />
          <div className="host-home-info">
            <h3>{home.name}</h3>
            <h5>{home.location}</h5>
            <p>${home.price}/night</p>
          </div>
        </div>
      </Link>
    ));
    return (
      <div className="host-homes-list">
        <section>{hostHomesEls}</section>
      </div>
    );
  }

  return (
    <section>
      <h1 className="host-homes-title">Your listed homes</h1>
      <Suspense fallback={<h2>Loading homes...</h2>}>
        <Await resolve={loaderData.homes}>{renderHostHomesElements}</Await>
      </Suspense>
    </section>
  );
}

export default HostHomes;
