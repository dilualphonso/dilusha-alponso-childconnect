
import { useEffect, useState } from "react";
import  {BASE_URL}  from "../../constant-variable";
import axios from "axios";
import "./AddDaycareItem.scss"

function AddDaycareItem({}){

    // const [submitBtnText, setSubmitButtonText] = useState("");

    // const [daycareNameError, setIsDaycarNameError] = useState(false);
    // const [isStreetError, setIsStreetError] = useState(false);
    // const [isCityError, setIsCityError] = useState(false);
    // const [isCountryError, setIsCountryError] = useState(false);

    // // Contact details error states
    // const [isContactNameError, setIsContactNameError] = useState(false);
    // const [isPositionError, setIsPositionError] = useState(false);
    // const [phoneError, setPhoneError] = useState("");
    // const [emailError, setEmailError] = useState("");


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
            [name]: value
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        const daycare = getInputtedDaycare();
        addDaycare(daycare);
        resetInputs();
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
            preschool_capacity: formInputs.preschoolCapacity
        };
        return daycareObject;
    }

    function resetInputs() {
        setFormInputs(initialState);
    }

    return(
        <section className="daycare-form">
        <form className="daycare-form__form" name="addDaycareForm" id="addDaycareForm" onSubmit={submitHandler}>
            <div className="daycare-form__wrapper">
            <fieldset className="daycare-form__details-container" form="addDaycareForm" name="daycareDetailsFields" >
                {/* Use h3 instead of legend in tablet as the styling of fieldset would required non-flex styling */}
                <h3 className="daycare-form__sub-heading">Daycare Details</h3>

                <label className="daycare-form__label" htmlFor="daycareName">Daycare Name</label>
                <input className= "daycare-form__input" type="text" name="daycareName" id="daycareName" placeholder="Daycare Name"    value={formInputs.daycareName}
                            onChange={handleChange}/>

                <label className="daycare-form__label" htmlFor="streetAddress">Street Address</label>
                <input className= "daycare-form__input" type="text" name="streetAddress" id="streetAddress" placeholder="Street Address"    value={formInputs.streetAddress}
                            onChange={handleChange} />



                <label className="daycare-form__label" htmlFor="city">City</label>
                <input className=  "daycare-form__input" type="text" name="city" id="city" placeholder="City"      value={formInputs.city}
                            onChange={handleChange}/>

                <label className="daycare-form__label" htmlFor="country">Region</label>
                <input className= "daycare-form__input" type="text" name="region" id="region" placeholder="Region"  value={formInputs.region}
                            onChange={handleChange} />
               <label className="daycare-form__label" htmlFor="country">Country</label>
                <input className= "daycare-form__input" type="text" name="country" id="country" placeholder="Country"     value={formInputs.country}
                            onChange={handleChange} />

                <label className="daycare-form__label" htmlFor="country">Postal Code</label>
                <input className= "daycare-form__input" type="text" name="postalcode" id="postalcode" placeholder="PostalCode" value={formInputs.postalcode}
                            onChange={handleChange} />


                <label className="daycare-form__label" htmlFor="latitude">Latitude</label>
                <input className= "daycare-form__input" type="text" name="latitude" id="latitude" placeholder="Latitude"  value={formInputs.latitude}
                            onChange={handleChange} />

                <label className="daycare-form__label" htmlFor="longitude">Longitude</label>
                <input className= "daycare-form__input" type="text" name="longitude" id="longitude" placeholder="Longitude"   value={formInputs.longitude}
                            onChange={handleChange} />
            </fieldset>
            <fieldset className="daycare-form__contact-container" form="addDaycareForm" name="contactDetailsFields">
                {/* Use h3 instead of legend in tablet as the styling of fieldset would required non-flex styling */}
                <h3 className="daycare-form__sub-heading">Other Details</h3>

                <label className="daycare-form__label" htmlFor="ownerName">Owner Name</label>
                <input className="daycare-form__input" type="text" name="ownerName" id="ownerName" placeholder="Owner Name"    value={formInputs.ownerName}
                            onChange={handleChange} />

                <label className="daycare-form__label" htmlFor="phoneNumber">Phone Number</label>
                <input className= "daycare-form__input" type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"    value={formInputs.phoneNumber}
                            onChange={handleChange}/>

                <label className="daycare-form__label" htmlFor="email">Email</label>
                <input className= "daycare-form__input" type="text" name="email" id="email" placeholder="Email"      value={formInputs.email}
                            onChange={handleChange}/>

<label className="daycare-form__label" htmlFor="years">Years</label>
                <input className= "daycare-form__input" type="text" name="years" id="years" placeholder="Years"      value={formInputs.years}
                            onChange={handleChange}/>
                 <label className="daycare-form__label" htmlFor="agerange">Age range</label>
                <input className= "daycare-form__input" type="text" name="agerange" id="agerange" placeholder="Age range"      value={formInputs.agerange}
                            onChange={handleChange}/>
                <label className="daycare-form__label" htmlFor="infantcapacity">Infants Capacity</label>
                <input className= "daycare-form__input" type="text" name="infantCapacity" id="infantCapacity" placeholder="Infant Capacity"      value={formInputs.infantCapacity}
                            onChange={handleChange}/>
                <label className="daycare-form__label" htmlFor="toddlercapacity">Toddlers Capacity</label>
                <input className= "daycare-form__input" type="text" name="toddlerCapacity" id="toddlercapacity" placeholder="Toddler Capacity"      value={formInputs.toddlerCapacity}
                            onChange={handleChange}/>
                <label className="daycare-form__label" htmlFor="preschoolCapacity">Preschool Capacity</label>
                <input className= "daycare-form__input" type="text" name="preschoolCapacity" id="prescholoCapacity" placeholder="preschool Capacity"      value={formInputs.preschoolCapacity}
                            onChange={handleChange}/>
            </fieldset>
            </div>
            <div className="daycare-form__button-container">
                <button className="daycare-form__button daycare-form__button--cancel" >Cancel</button>
                <button className="daycare-form__button daycare-form__button--submit">Submit</button>
            </div>
        </form>
    </section>
    )
}

export default AddDaycareItem