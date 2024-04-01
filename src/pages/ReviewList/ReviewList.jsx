import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";


import "./ReviewList.scss"
function ReviewList({ rating }) {
  const stars = [];

  // Calculate the whole and fractional parts of the rating
  const wholeStars = Math.floor(rating);
  const decimalPart = rating - wholeStars;

  // Render whole stars
  for (let i = 1; i <= wholeStars; i++) {
    stars.push(<FaStar key={i} className="star" />);
  }

  // Render half star if applicable
  if (decimalPart >= 0.25 && decimalPart < 0.75) {
    stars.push(<FaStarHalf key="half" className="half-star" />);
  }

  // Render whole star for the upper half if applicable
  if (decimalPart >= 0.75) {
    stars.push(<FaStar key="upper-half" className="star" />);
  }

  // Calculate remaining empty stars
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 1; i <= remainingStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="empty-star" />);
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default ReviewList;
