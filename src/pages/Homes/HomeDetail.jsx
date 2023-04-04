import React, { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { getHome } from "../../api/firebase";

export function loader({ params }) {
  return defer({ home: getHome(params.id) });
}

function HomeDetail() {
  const location = useLocation();
  const loaderData = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="home-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; Back to {type}
      </Link>
      <Suspense fallback={<h1>Loading {type}...</h1>}>
        <Await resolve={loaderData.home}>
          {(home) => (
            <div className="home-detail">
              <img src={home.imageUrl} alt="" />
              <i className={`home-type ${home.type} selected`}>{home.type}</i>
              <h2>{home.name}</h2>
              <h4>{home.location}</h4>
              <p className="home-price">
                <span>${home.price}</span>/night
              </p>
              <p>{home.description}</p>
              <button className="link-button">Rent this {home.type}</button>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default HomeDetail;
