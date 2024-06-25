"use client";
import { Typography } from "@mui/material";

const LicenseCard = () => {
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
            Driving License
          </strong>
          <br />
          Yes
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Driving License Type
          </strong>
          <br />
          C1E
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Driving License expiry date
          </strong>
          <br />
          01 / 04 / 2025
        </Typography>
      </div>
    </div>
  );
};

export default LicenseCard;
