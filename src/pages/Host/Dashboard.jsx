import React, { Suspense } from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostHomes } from "../../api/firebase";

export function loader() {
  return defer({ homes: getHostHomes() });
}

function Dashboard() {
  const loaderData = useLoaderData();

  function renderHomeElements(homes) {
    const hostHomesElements = homes.map((home) => (
      <div className="host-home-single" key={home.id}>
        <img src={home.imageUrl} alt={`Pic of ${home.name}`} />
        <div className="host-home-info">
          <h3>{home.name}</h3>
          <p>${home.price}/night</p>
        </div>
        <Link to={`homes/${home.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-homes-list">
        <section>{hostHomesElements}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,590</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>

        <BsStarFill className="star" />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-homes">
        <div className="top">
          <h2>Your listed homes</h2>
          <Link to="homes">View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.homes}>{renderHomeElements}</Await>
        </Suspense>
      </section>
    </>
  );
}

export default Dashboard;
