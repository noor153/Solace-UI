"use client";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Typography } from "@mui/material";

const MilitaryCard = () => {
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
            Require Travel Permit
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
            Military Status
          </strong>
          <br />
          Exempted
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Document
          </strong>
          <br />
          <div className="flex bg-gray-100 gap-x-2 p-2 rounded w-fit">
            <AttachFileIcon className="text-gray-500" />
            <Typography className="font-medium ">filename1.docx</Typography>
          </div>
        </Typography>
      </div>
    </div>
  );
};

export default MilitaryCard;
