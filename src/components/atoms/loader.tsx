import { CircularProgress } from "@mui/material";
import { Fragment } from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        />
      </Fragment>
    </div>
  );
};

export default Loader;
