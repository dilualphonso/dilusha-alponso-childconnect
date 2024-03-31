import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant-variable";
import axios from "axios";
import MapData from "../../components/MapData/MapData";
import "./DaycareList.scss"
import DaycareSearch from "../../components/DaycareSearch/DaycareSearch";
import { Link } from "react-router-dom";
import ReviewList from "../ReviewList/ReviewList";
import Comments from "../../components/Comments/Comments";

function DaycareList({meanValue,comments}) {

  const [completedUrl, setCompletedUrl] = useState(`${BASE_URL}/daycares`);
  const [daycares, setDaycares] = useState([]);


  console.log(comments);

  //display data
  useEffect(() => {
    const fetchdaycares = async () => {
      try {
        const response = await axios.get(
          completedUrl
        );

        // if (response.data.message=== "No result") {
        //     setnoResultMessage(`No search result`);
        //   } else {
        //     setnoResultMessage(""); // Clear the message if there are results
        //   }

        // console.log(response.data);
        setDaycares(response.data);

      }
      catch (error) {
        console.error("Error fetching daycare:", error);
      }
    };
    fetchdaycares();
  }, [completedUrl]);

  const calculateMeanRating = (daycareId) => {
    const filteredComments = comments.filter((comment) => comment.daycare_id === daycareId);
    if (filteredComments.length === 0) {
      return 0; // No comments for this daycare
    }
    const ratings = filteredComments.map((comment) => comment.rating);
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const mean = sum / ratings.length;
    return mean;
  };


  return (
    <div>
      <section className="home">

         <DaycareSearch completedUrl={completedUrl} setCompletedUrl={setCompletedUrl}/>

      <MapData  className="home__map"daycares={daycares} />
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
          </div>
          <div>
          </div>

          <div className="daycare__bottom-container">
            {daycares.length > 0 && daycares
              .map((daycare) => (

                <div className="daycare__test" key={daycare.id}>

                  <div className='daycare__wrapper'>

                    <div className="daycare__container">


                        <div className="daycare__name-container">



                        <Link to={`/daycares/${daycare.id}`}> <div className="daycare__name">{daycare.childcare_name}</div></Link>



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
                            <div className="daycare__contact-phone" >{daycare.contact_phone}</div>
                            <div className="daycare__contact-email">{daycare.contact_email}</div>

                          </div >

                          <div className="daycare__ratings">

                      </div>

                      </div>


                    </div>


                  </div>



              ))

            }

</div>

            {/* <img className="daycare__sort" src={sortIcon} alt="sorting icon" /> */}

        </div>

      </section>
    </div>

  );


}
export default DaycareList;