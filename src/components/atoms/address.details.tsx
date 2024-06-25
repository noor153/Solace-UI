"use client";
import { Typography } from "@mui/material";

const AddressDetails = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto mt-6 mb-2 text-black">
      <div className="grid grid-cols-4 gap-x-16 ">
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Country
          </strong>
          <br />
          Egypt
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            City
          </strong>
          <br />
          Cairo
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Postal Code
          </strong>
          <br />
          11728
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-x-16 ">
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Building
          </strong>
          <br />7
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Street
          </strong>
          <br />
          Street 127
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Floor No.
          </strong>
          <br />7
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Apartment
          </strong>
          <br />
          72
        </Typography>
      </div>
    </div>
  );
};

export default AddressDetails;
