import { useState } from "react";
import { BASE_URL } from "../../constant-variable";
import axios from "axios";
import "./AddDaycareItem.scss";

function AddDaycareItem() {
  const initialState = {
    daycareName: "",
    streetAddress: "",
    city: "",
    region: "",
    postalcode: "",
    country: "",
    ownerName: "",
    latitude: "",
    longitude: "",
    phoneNumber: "",
    email: "",
    infantCapacity: "",
    toddlerCapacity: "",
    preschoolCapacity: "",
    years: "",
    agerange: ""
  };

  const [formInputs, setFormInputs] = useState(initialState);
  const [error, setError] = useState(false);

  const addDaycare = async (daycare) => {
    try {
      const response = await axios.post(`${BASE_URL}/daycares`, daycare);
      if (!!response.data) {
        console.log("Daycare added successfully:", response.data);
        // TODO: Handle success (e.g., show success message)
      }
    } catch (error) {
      console.error("Error adding daycare:", error);
      // TODO: Handle error (e.g., show error message)
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      formInputs.daycareName.length === 0 ||
      formInputs.streetAddress.length === 0 ||
      formInputs.city.length === 0 ||
      formInputs.region.length === 0 ||
      formInputs.postalcode.length === 0 ||
      formInputs.country.length === 0 ||
      formInputs.agerange.length === 0 ||
      formInputs.latitude.length === 0 ||
      formInputs.longitude.length === 0 ||
      formInputs.phoneNumber.length === 0 ||
      formInputs.email.length === 0
    ) {
      setError(true);
    } else {
      const daycare = getInputtedDaycare();
      addDaycare(daycare);
      resetInputs();
    }
  }

  function getInputtedDaycare() {
    const daycareObject = {
      childcare_name: formInputs.daycareName,
      address: formInputs.streetAddress,
      city: formInputs.city,
      region: formInputs.region,
      postalcode: formInputs.postalcode,
      country: formInputs.country,
      owner_name: formInputs.ownerName,
      latitude: formInputs.latitude,
      longitude: formInputs.longitude,
      contact_phone: formInputs.phoneNumber,
      contact_email: formInputs.email,
      years: formInputs.years,
      age_range: formInputs.agerange,
      infant_capacity: formInputs.infantCapacity,
      toddler_capacity: formInputs.toddlerCapacity,
      preschool_capacity: formInputs.preschoolCapacity,
    };
    return daycareObject;
  }

  function resetInputs() {
    setFormInputs(initialState);
    setError(false);
  }

  return (
    <section className="daycare-form">
      <form
        className="daycare-form__form"
        name="addDaycareForm"
        id="addDaycareForm"
        onSubmit={submitHandler}
      >
        <div className="daycare-form__wrapper">
          <fieldset
            className="daycare-form__details-container"
            form="addDaycareForm"
            name="daycareDetailsFields"
          >
            {/* Use h3 instead of legend in tablet as the styling of fieldset would required non-flex styling */}
            <h3 className="daycare-form__sub-heading">Daycare Details</h3>

            <label className="daycare-form__label" htmlFor="daycareName">
              Daycare Name
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="daycareName"
              id="daycareName"
              placeholder="Daycare Name"
              value={formInputs.daycareName}
              onChange={handleChange}
            />
            {error && formInputs.daycareName.length <= 0 ? (
              <label className="daycare-form__label-error">
                Daycare Name can't be empty
              </label>
            ) : (
              ""
            )}

            <label className="daycare-form__label" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="streetAddress"
              id="streetAddress"
              placeholder="Street Address"
              value={formInputs.streetAddress}
              onChange={handleChange}
            />

            {error && formInputs.streetAddress.length <= 0 ? (
              <label className="daycare-form__label-error">
                Daycare Street address can't be empty
              </label>
            ) : (
              ""
            )}

            <label className="daycare-form__label" htmlFor="city">
              City
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={formInputs.city}
              onChange={handleChange}
            />
            {error && formInputs.city.length <= 0 ? (
              <label className="daycare-form__label-error">
                City can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="country">
              Region
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="region"
              id="region"
              placeholder="Region"
              value={formInputs.region}
              onChange={handleChange}
            />
            {error && formInputs.region.length <= 0 ? (
              <label className="daycare-form__label-error">
                Region can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="country">
              Country
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={formInputs.country}
              onChange={handleChange}
            />
            {error && formInputs.country.length <= 0 ? (
              <label className="daycare-form__label-error">
                Country can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="country">
              Postal Code
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="postalcode"
              id="postalcode"
              placeholder="PostalCode"
              value={formInputs.postalcode}
              onChange={handleChange}
            />

            {error && formInputs.postalcode.length <= 0 ? (
              <label className="daycare-form__label-error">
                Postal code can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="latitude">
              Latitude
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="latitude"
              id="latitude"
              placeholder="Latitude"
              value={formInputs.latitude}
              onChange={handleChange}
            />
            {error && formInputs.latitude.length <= 0 ? (
              <label className="daycare-form__label-error">
                Latitude can't be empty
              </label>
            ) : (
              ""
            )}

            <label className="daycare-form__label" htmlFor="longitude">
              Longitude
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="longitude"
              id="longitude"
              placeholder="Longitude"
              value={formInputs.longitude}
              onChange={handleChange}
            />
            {error && formInputs.longitude.length <= 0 ? (
              <label className="daycare-form__label-error">
                Longitude can't be empty
              </label>
            ) : (
              ""
            )}
          </fieldset>
          <fieldset
            className="daycare-form__contact-container"
            form="addDaycareForm"
            name="contactDetailsFields"
          >
            {/* Use h3 instead of legend in tablet as the styling of fieldset would required non-flex styling */}
            <h3 className="daycare-form__sub-heading">Other Details</h3>

            <label className="daycare-form__label" htmlFor="ownerName">
              Owner Name
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="ownerName"
              id="ownerName"
              placeholder="Owner Name"
              value={formInputs.ownerName}
              onChange={handleChange}
            />

            <label className="daycare-form__label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number"
              value={formInputs.phoneNumber}
              onChange={handleChange}
            />
            {error && formInputs.phoneNumber.length <= 0 ? (
              <label className="daycare-form__label-error">
                Phone Number can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="email">
              Email
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formInputs.email}
              onChange={handleChange}
            />
            {error && formInputs.email.length <= 0 ? (
              <label className="daycare-form__label-error">
                Email can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="years">
              Years
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="years"
              id="years"
              placeholder="Years"
              value={formInputs.years}
              onChange={handleChange}
            />
            <label className="daycare-form__label" htmlFor="agerange">
              Age range
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="agerange"
              id="agerange"
              placeholder="Age range"
              value={formInputs.agerange}
              onChange={handleChange}
            />

            {error && formInputs.agerange.length <= 0 ? (
              <label className="daycare-form__label-error">
                Age range can't be empty
              </label>
            ) : (
              ""
            )}
            <label className="daycare-form__label" htmlFor="infantcapacity">
              Infants Capacity
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="infantCapacity"
              id="infantCapacity"
              placeholder="Infant Capacity"
              value={formInputs.infantCapacity}
              onChange={handleChange}
            />

            <label className="daycare-form__label" htmlFor="toddlercapacity">
              Toddlers Capacity
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="toddlerCapacity"
              id="toddlercapacity"
              placeholder="Toddler Capacity"
              value={formInputs.toddlerCapacity}
              onChange={handleChange}
            />
            <label className="daycare-form__label" htmlFor="preschoolCapacity">
              Preschool Capacity
            </label>
            <input
              className="daycare-form__input"
              type="text"
              name="preschoolCapacity"
              id="prescholoCapacity"
              placeholder="Preschool Capacity"
              value={formInputs.preschoolCapacity}
              onChange={handleChange}
            />
          </fieldset>
        </div>
        <div className="daycare-form__button-container">
          <button className="daycare-form__button daycare-form__button--cancel">
            Cancel
          </button>
          <button className="daycare-form__button daycare-form__button--submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddDaycareItem;
