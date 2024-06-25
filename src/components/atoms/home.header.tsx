"use client";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData } from "@/redux/slices/user.slice";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Avatar, Badge, Breadcrumbs, Link, Typography } from "@mui/material";
import ProfileIcon from "../../../public/badge.png";

const HomeHeader = () => {
  const userInfo = useAppSelector(selectUserData);
  const breadcrumbs = [
    <Link
      style={{
        color: "#959FB0",
      }}
      key="1"
      color="inherit"
      className="text-sm"
      underline="none"
    >
      Dashboard
    </Link>,
    <Link
      style={{
        color: "#959FB0",
      }}
      key="2"
      color="inherit"
      className="text-sm"
      underline="none"
    >
      HR Manage
    </Link>,
    <Link
      style={{
        color: "#959FB0",
      }}
      key="3"
      color="inherit"
      className="text-sm"
      underline="none"
    >
      Employees
    </Link>,
    <Typography
      key="4"
      color="text.primary"
      style={{
        color: "#003FAD",
      }}
      className="text-sm"
    >
      {userInfo?.firstName} {userInfo?.fatherName} Profile
    </Typography>,
  ];
  return (
    <div className="p-2 px-8 flex justify-between">
      <div className="">
        <Typography className="flex text-2xl text-black font-bold py-4">
          {userInfo?.firstName} {userInfo?.fatherName} Profile
        </Typography>
        <Breadcrumbs
          separator={
            <NavigateNextIcon className="text-sky-600" fontSize="medium" />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>

      <div className="items-center flex justify-between">
        <div className="mx-4">
          <Badge color="error" variant="dot">
            <NotificationsOutlinedIcon className=" text-black" />
          </Badge>
        </div>
        <div className="mx-4">
          <EmailOutlinedIcon
            className=" text-black"
            style={{ height: "30%" }}
          />
        </div>
        <div className="mx-4">
          <SettingsOutlinedIcon
            className=" text-black"
            style={{ height: "30%" }}
          />
        </div>
        <div className="ms-4">
          <Avatar
            alt="Remy Sharp"
            src={ProfileIcon.src}
            style={{ borderRadius: 0 }}
          />
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;
