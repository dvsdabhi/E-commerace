import React from "react";

const AddressCard = ({ formData,showAddress }) => {
  console.log("formData-->>",formData);
  return (
    <>
      <div>
        {/* {showAddress &&  */}
          <div className="space-y-3">
            {/* <p className="font-semibold">{formData.FirstName}</p> */}
            <p className="font-semibold">Divyesh</p>
            {/* <p>
              {formData.Address} ,{formData.Pincode}
            </p> */}
            <p>Surat,395004</p>
            <div className="space-y-1">
              <p className="font-semibold">Phone Number</p>
              {/* <p>{formData.PhoneNumber}</p> */}
              <p>1258974563</p>
            </div>
          </div>
        {/* } */}
      </div>
    </>
  );
};

export default AddressCard;
