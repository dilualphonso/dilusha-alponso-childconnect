export function validateDaycareForm(daycare) {
    let hasErrors = false;

    // Check if any if the non-formatted fields are empty
    if (
      isFieldEmpty(daycare.daycare_name)
    //   isFieldEmpty(warehouse.address) ||
    //   isFieldEmpty(warehouse.city) ||
    //   isFieldEmpty(warehouse.country) ||
    //   isFieldEmpty(warehouse.contact_name) ||
    //   isFieldEmpty(warehouse.contact_position)
    ) {
      hasErrors = true;
    }

    // Check what type of error (if any) the phone number field has
    // if (isFieldEmpty(warehouse.contact_phone)) {
    //   hasErrors = true;
    //   phoneErrMsg = "This field is required";
    // } else if (!isPhoneFormatValid(warehouse.contact_phone)) {
    //   hasErrors = true;
    //   phoneErrMsg = "Invalid format. [Example: +1 (321) 456-7890 ]";
    // }

    // Check what type of error (if any) the email field has
    // if (isFieldEmpty(warehouse.contact_email)) {
    //   hasErrors = true;
    //   emailErrMsg = "This field is required";
    // } else if (!isEmailFormatValid(warehouse.contact_email)) {
    //   hasErrors = true;
    //   emailErrMsg = "Invalid format";
    // }

    function isFieldEmpty(input) {
        return !input || input.length === 0;
      }

    // Create an object that has all information the form will need to populate error fields (if necessary)
    const errorsRecord = {
      errorsExist: hasErrors,
      isDaycareNameError: isFieldEmpty(daycare.daycare_name),
    //   isAddressError: isFieldEmpty(warehouse.address),
    //   isCityError: isFieldEmpty(warehouse.city),
    //   isCountryError: isFieldEmpty(warehouse.country),
    //   isContactNameError: isFieldEmpty(warehouse.contact_name),
    //   isPositionError: isFieldEmpty(warehouse.contact_position),
    //   isPhoneError: phoneErrMsg,
    //   isEmailError: emailErrMsg,
    };

    // Return the validation results
    return errorsRecord;
  }
