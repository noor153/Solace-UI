"use client";
import AddressDetails from "@/components/atoms/address.details";
import BankInformationCard from "@/components/atoms/bank.information.card";
import ContactCard from "@/components/atoms/contact.card";
import EditUserModal from "@/components/atoms/data.edit.form";
import LicenseCard from "@/components/atoms/driver.license";
import EmergencyCard from "@/components/atoms/emergency.contacts";
import Failure from "@/components/atoms/failure";
import HomeHeader from "@/components/atoms/home.header";
import IDCard from "@/components/atoms/information.card";
import InformationCardHeader from "@/components/atoms/information.card.header";
import Loader from "@/components/atoms/loader";
import MilitaryCard from "@/components/atoms/military.card";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  SliceStatus,
  User,
  editUser,
  fetchUser,
  selectUserData,
  selectUserStatus,
} from "@/redux/slices/user.slice";
import { Divider } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import EditPhoto from "../../public/Edit Photo.png";
import ProfileImage from "../../public/profile.png";
enum InformationType {
  PERSONAL = "Personal Information",
  FINANCIAL = "Financial Information",
}
export default function Home() {
  const dispatch = useAppDispatch();
  const userSliceStatus = useAppSelector(selectUserStatus);
  const userInfo = useAppSelector(selectUserData);
  const [selectedInformation, setSelectedInformation] =
    useState<InformationType>(InformationType.PERSONAL);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  useEffect(() => {
    if (userSliceStatus === SliceStatus.IDLE) {
      dispatch(fetchUser(27));
    }
  }, [dispatch, userSliceStatus]);
  if (
    (!userInfo || !userInfo.firstName) &&
    userSliceStatus !== SliceStatus.FAILED
  ) {
    return <Loader />;
  }
  if (userSliceStatus === SliceStatus.FAILED) {
    return <Failure />;
  }
  return (
    <main className=" min-h-screen bg-zinc-50">
      <HomeHeader />
      <div className="flex">
        <div className="flex flex-col w-1/3 ">
          <div
            className="m-4 ms-6 p-8"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
          >
            <div
              className=""
              style={{
                position: "relative",
                width: "fit-content",
              }}
            >
              <Image
                src={ProfileImage.src}
                width={125}
                height={125}
                alt={userInfo?.firstName ?? ""}
              />
              <div style={{ position: "absolute", bottom: -10, right: -10 }}>
                <Image alt="" src={EditPhoto.src} width={40} height={40} />
              </div>
            </div>
            <div className="">
              <h4 className="text-xl text-black font-semibold mb-2 mt-4">
                {userInfo?.firstName} {userInfo?.fatherName}
              </h4>
              <h4 className="text-base mb-6 mt-2" style={{ color: "#737791" }}>
                Senior Product Manager
              </h4>
            </div>
            <Divider />
            <div
              className={`p-4 px-4 my-2 mt-6 font-medium rounded-lg ${
                selectedInformation === InformationType.PERSONAL && "bg-sky-50"
              }`}
              style={{
                color:
                  selectedInformation === InformationType.PERSONAL
                    ? "#0F6CBD"
                    : "black",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedInformation(InformationType.PERSONAL);
              }}
            >
              Personal Information
            </div>
            <div
              className={`p-4 mb-2 px-4 font-medium text-black rounded-lg ${
                selectedInformation === InformationType.FINANCIAL && "bg-sky-50"
              }`}
              style={{
                color:
                  selectedInformation === InformationType.FINANCIAL
                    ? "#0F6CBD"
                    : "black",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedInformation(InformationType.FINANCIAL);
              }}
            >
              Financial Information
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 ">
          {selectedInformation === InformationType.PERSONAL ? (
            <>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader
                  onClick={() => {
                    setOpenEditModal(true);
                  }}
                  title="Basic Information"
                />
                <IDCard />
              </div>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader title="Contact Information" />
                <ContactCard />
              </div>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader title="Emergency Contacts" />
                <EmergencyCard />
              </div>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader title="Address Details" />
                <AddressDetails />
              </div>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader title="Driving License Details" />
                <LicenseCard />
              </div>
              <div
                className="m-4 me-6 p-8 pt-6 shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
              >
                <InformationCardHeader title="Military Status" />
                <MilitaryCard />
              </div>
            </>
          ) : (
            <div
              className="m-4 me-6 p-8 pt-6 shadow-lg"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "24px" }}
            >
              <InformationCardHeader title="Bank Information" />
              <BankInformationCard />
            </div>
          )}
        </div>
        <EditUserModal
          open={openEditModal}
          handleClose={() => {
            setOpenEditModal(false);
          }}
          user={userInfo as User}
          onSubmit={(userData) => {
            console.log("[LOGGING][UserDataForUpdate]", userData);
            dispatch(editUser({ userId: 27, userData }));
            setOpenEditModal(false);
          }}
        />
      </div>
    </main>
  );
}
