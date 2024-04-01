import { BASE_URL } from "../../constant-variable";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./DaycareDetailPage.scss";
import Comments from "../../components/Comments/Comments";
import ReviewList from "../ReviewList/ReviewList";

function DaycareDetailPage() {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [daycareData, setDaycareData] = useState({}); // Initialize as object

  const calculateMeanRating = () => {
    if (comments.length === 0) {
      return 0; // To avoid division by zero
    }
    const totalRating = comments.reduce((accumulator, comment) => {
      return accumulator + comment.rating;
    }, 0);

    return totalRating / comments.length;
  };

  // Call this function wherever you need the mean rating
  const meanRating = calculateMeanRating();
  console.log("Mean Rating:", meanRating);

  useEffect(() => {
    const getDaycare = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/daycares/${id}`);
        console.log(response.data);
        setDaycareData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getDaycare();
  }, [id]);

  return (
    <section className="childcare">
      <div className="childcare__container">
        <div key={daycareData.id} className="childcare__wrapper">
          <div key={daycareData.id} className="childcare__left-container">
            <p className="childcare__name">{daycareData.childcare_name}</p>
            <p className="childcare__address">
              {daycareData.address}, {daycareData.city}, {daycareData.region}
            </p>
            <p className="childcare__country">{daycareData.country}</p>
            <p className="childcare__postalcode">{daycareData.postalcode}</p>
            <p className="childcare__contact-email">
              {daycareData.contact_email}
            </p>
            <div className="childcare__contact-phone">
              {daycareData.contact_phone}
            </div>
            <div>{<ReviewList rating={meanRating} />}</div>
          </div>
          <div className="childcare__right-container">
            <div className="childcare__label-container">
              <label className="childcare__label">Owner Name</label>
              <p className="childcare__contact-phone" id="daycareName">
                {daycareData.owner_name}
              </p>
            </div>
            <div className="childcare__label-container">
              <label className="childcare__label">Years</label>
              <p className="childcare__contact-email">{daycareData.years}</p>
            </div>
            <div className="childcare__label-container">
              <label className="childcare__label">Age Range</label>
              <p className="childcare__agerange">{daycareData.age_range}</p>
            </div>
            <div className="childcare__label-container">
              <label className="childcare__label">Infant Capacity</label>
              <p>{daycareData.infant_capacity}</p>
            </div>
            <div className="childcare__label-container">
              <label className="childcare__label">Toddler Capacity</label>
              <p>{daycareData.toddler_capacity}</p>
            </div>
            <div className="childcare__label-container">
              <label className="childcare__label">Preschool Capacity</label>
              <p>{daycareData.preschool_capacity}</p>
            </div>
          </div>
        </div>
        <Comments comments={comments} setComments={setComments} />
      </div>
    </section>
  );
}

export default DaycareDetailPage;
