import { Button } from "@mui/material";

interface Props {
  title: string;
  onClick?: () => void;
}

const InformationCardHeader = ({ title, onClick }: Props) => {
  return (
    <div className="justify-between items-center flex">
      <div className="font-medium text-xl" style={{ color: "#151D48" }}>
        {title}
      </div>
      <Button
        variant="contained"
        className="text-white px-8 font-semibold"
        style={{ background: "#0F6CBD", border: "1px solid #0058A9" }}
        onClick={onClick}
      >
        Edit
      </Button>
    </div>
  );
};

export default InformationCardHeader;
