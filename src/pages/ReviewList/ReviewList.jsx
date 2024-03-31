import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FaStar, FaStarHalf ,FaRegStar} from 'react-icons/fa';




function ReviewList({rating}){
    const stars = [];

    // Calculate the whole and fractional parts of the rating
    const wholeStars = Math.floor(rating);
    const decimalPart = rating - wholeStars;

    // Render whole stars
    for (let i = 1; i <= wholeStars; i++) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    }

    // Render half star if applicable
    if (decimalPart >= 0.25 && decimalPart < 0.75) {
      stars.push(<FaStarHalf key="half" color="#ffc107" />);
    }

    // Render whole star for the upper half if applicable
    if (decimalPart >= 0.75) {
      stars.push(<FaStar key="upper-half" color="#ffc107" />);
    }

    // Calculate remaining empty stars
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 1; i <= remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} color="#ffffff" />);
    }
    return(
        <div>
{stars}
        </div>
    )
}

export default ReviewList;