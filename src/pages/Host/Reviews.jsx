import React from "react";
import { BsStarFill } from "react-icons/bs";

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The A-frame Diamond is such an awesome home! Such a comfortable trip. We stayed for a weeks and there was not a single issue. Super clean when we got in and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time staying at the Double Moon Ranch for our vacation and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img
        className="graph"
        src="../images/reviews-graph.png"
        alt="Review graph"
      />
      <h3>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review-star" key={i} />
            ))}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Reviews;
