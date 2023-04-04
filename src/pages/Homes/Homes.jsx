import React, { Suspense } from "react";
import {
  defer,
  Link,
  useLoaderData,
  useSearchParams,
  Await,
} from "react-router-dom";
import { getAllHomes } from "../../api/firebase";

export function loader() {
  return defer({ homes: getAllHomes() });
}

function Homes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const dataPromise = useLoaderData();

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderHomeElements(homes) {
    const displayedHomes = typeFilter
      ? homes.filter((home) => home.type === typeFilter)
      : homes;

    const homeElements = displayedHomes.map((home) => (
      <div key={home.id} className="home-tile">
        <Link
          to={home.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
          <img src={home.imageUrl} alt="" />
          <div className="home-info">
            <h3>{home.name}</h3>
            <h5>{home.location}</h5>
            <p>
              ${home.price}
              <span>/night</span>
            </p>
          </div>
          <i className={`home-type ${home.type} selected`}>{home.type}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="home-list-filter-buttons">
          <button
            onClick={() => handleFilterChange("type", "cabin")}
            className={`home-type cabin 
                    ${typeFilter === "cabin" ? "selected" : ""}`}
          >
            Cabins
          </button>
          <button
            onClick={() => handleFilterChange("type", "treehouse")}
            className={`home-type treehouse 
                    ${typeFilter === "treehouse" ? "selected" : ""}`}
          >
            Treehouses
          </button>
          <button
            onClick={() => handleFilterChange("type", "yurt")}
            className={`home-type yurt 
                    ${typeFilter === "yurt" ? "selected" : ""}`}
          >
            Yurts
          </button>
          <button
            onClick={() => handleFilterChange("type", "dome")}
            className={`home-type dome 
                    ${typeFilter === "dome" ? "selected" : ""}`}
          >
            Domes
          </button>
          <button
            onClick={() => handleFilterChange("type", "container")}
            className={`home-type container 
                    ${typeFilter === "container" ? "selected" : ""}`}
          >
            Containers
          </button>
          <button
            onClick={() => handleFilterChange("type", "barn")}
            className={`home-type barn 
                    ${typeFilter === "barn" ? "selected" : ""}`}
          >
            Barns
          </button>

          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="home-type clear-filters"
            >
              Clear filter
            </button>
          ) : null}
        </div>
        <div className="home-list">{homeElements}</div>
      </>
    );
  }

  return (
    <div className="home-list-container">
      <h1>Explore our homes options</h1>
      <Suspense fallback={<h2>Loading homes...</h2>}>
        <Await resolve={dataPromise.homes}>{renderHomeElements}</Await>
      </Suspense>
    </div>
  );
}

export default Homes;
