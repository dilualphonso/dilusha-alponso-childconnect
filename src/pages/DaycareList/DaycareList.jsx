import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../constant-variable";
import MapData from "../../components/MapData/MapData";
import "./DaycareList.scss"
import DaycareSearch from "../../components/DaycareSearch/DaycareSearch";
import { Link } from "react-router-dom";
import ReviewList from '../ReviewList/ReviewList';

function DaycareList({ comments, setComments }) {
  const [completedUrl, setCompletedUrl] = useState(`${BASE_URL}/daycares`);
  const [daycares, setDaycares] = useState([]);

  // Fetch data when completedUrl changes
  useEffect(() => {
    const fetchDaycares = async () => {
      try {
        const response = await axios.get(completedUrl);
        console.log(response.data);
        setDaycares(response.data);
      } catch (error) {
        console.error("Error fetching daycare:", error);
      }
    };

    fetchDaycares();
  }, [completedUrl]);

  return (
    <div>
      <section className="home">
        <DaycareSearch completedUrl={completedUrl} setCompletedUrl={setCompletedUrl} />
        <MapData className="home__map" daycares={daycares} />
      </section>

      <section className="daycare">
        <h1 className="daycare__title">Daycare List</h1>

        <div className="daycare__top-container">
          <div className="daycare__tab-headings">
            <div className="daycare__headings-name">
              <h4 className="daycare__name-heading">Daycares</h4>
            </div>
            <div className="daycare__headings-address">
              <h4 className="daycare__address-heading">Address</h4>
            </div>
            <div className="daycare__headings-contact-name">
              <h4 className="daycare__contact-name-heading">Age Range</h4>
            </div>
            <div className="daycare__headings-contact-info">
              <h4 className="daycare__contact-info-heading">Contact Information</h4>
            </div>
            <div className="daycare__headings-rating">
              <h4 className="daycare__rating-heading">Rating</h4>
            </div>
          </div>

          <div className="daycare__bottom-container">
            {daycares.length > 0 &&
              daycares.map((daycare) => (
                <div className="daycare__test" key={daycare.daycare_id}>
                  <div className='daycare__wrapper'>
                    <div className="daycare__container">
                      <div key={daycare.id} className="daycare__name-container">
                        <Link to={`/daycares/${daycare.daycare_id}`}>
                          <div className="daycare__name">{daycare.childcare_name}</div>
                        </Link>
                      </div>
                      <div className="daycare__address-container">
                        <p className="daycare__address">{daycare.address}, {daycare.city}, {daycare.country}</p>
                      </div>
                    </div>
                    <div className="daycare__contact-name-container">
                      <div className="daycare__contact-name">{daycare.age_range}</div>
                    </div>
                    <div className="daycare__contact-info-container">
                      <div className='daycare__contact-info'>
                        <div className="daycare__contact-phone">{daycare.contact_phone}</div>
                        <div className="daycare__contact-email">{daycare.contact_email}</div>
                      </div>
                    </div >
                    <div className="daycare__rating">
                    <p>  {<ReviewList rating={daycare.meanRating} />}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DaycareList;
