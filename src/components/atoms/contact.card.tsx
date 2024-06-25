"use client";
import { Typography } from "@mui/material";

const ContactCard = () => {
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
            Personal Email
          </strong>
          <br />
          John.smith@gmail.com
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Mobile
          </strong>
          <br />
          011223344556
        </Typography>
      </div>
    </div>
  );
};

export default ContactCard;
