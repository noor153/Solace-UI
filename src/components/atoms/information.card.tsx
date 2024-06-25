"use client";
import { useAppSelector } from "@/redux/hooks";
import { selectUserData, User } from "@/redux/slices/user.slice";
import { Typography } from "@mui/material";

const IDCard = () => {
  const userInfo = useAppSelector(selectUserData);

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
            National ID Number
          </strong>
          <br />
          {userInfo?.nationalId.idNumber}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            National ID Expiring Date
          </strong>
          <br />
          {new Date(
            (userInfo as User).nationalId.expiryDate
          ).toLocaleDateString()}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Title
          </strong>
          <br />
          Mr.
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-x-16 gap-y-4">
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            First Name
          </strong>
          <br />
          {userInfo?.firstName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Father Name
          </strong>
          <br />
          {userInfo?.fatherName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Grand Father Name
          </strong>
          <br />
          {userInfo?.grandfatherName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Family Name
          </strong>
          <br />
          {userInfo?.familyName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            الاسم الأول
          </strong>
          <br />
          {userInfo?.localizedName.firstName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            اسم الأب
          </strong>
          <br />
          {userInfo?.localizedName.fatherName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            اسم الجد
          </strong>
          <br />
          {userInfo?.localizedName.grandfatherName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            اللقب / اسم العائلة
          </strong>
          <br />
          {userInfo?.localizedName.familyName}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Date of birth
          </strong>
          <br />
          01 / 04 / 1980
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Gender
          </strong>
          <br />
          Male
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Nationality
          </strong>
          <br />
          Egyptian
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Additional Nationality
          </strong>
          <br />-
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-x-16 gap-y-4">
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Passport No.
          </strong>
          <br />
          A135464
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Passport Issue Date
          </strong>
          <br />
          01 / 04 / 1980
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Passport Expiry Date
          </strong>
          <br />
          01 / 04 / 1980
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-x-16 gap-y-4">
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Marital Status
          </strong>
          <br />
          {userInfo?.maritalStatus.name}
        </Typography>
        <Typography
          style={{ color: "#151D48" }}
          className="font-medium text-base"
        >
          <strong
            className="text-xs text-gray font-normal"
            style={{ color: "#737791" }}
          >
            Dependencies
          </strong>
          <br />
          {userInfo?.dependants}
        </Typography>
      </div>
    </div>
  );
};

export default IDCard;
