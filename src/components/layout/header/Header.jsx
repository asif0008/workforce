import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import NotificationIcon from "../../../assets/svgs/pagesIcons/NotificationIcon";
import Aside from "../aside/Aside";
import profilePic from '../../../assets/images/header/profilepic.webp'
import { FaChevronDown } from "react-icons/fa";


const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const path = pathname[pathname.length - 1].replaceAll("-", " ");

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="bg-white px-4 md:px-6 py-4 rounded-[16px] flex items-center justify-between">
        <div className="block xl:hidden cursor-pointer" onClick={handleModal}>
          <IoMenuOutline size={30} />
        </div>
        <h2 className="text-sm md:text-base font-semibold text-[#000] uppercase">
          {path}
        </h2>
        {/* profile and notification */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="cursor-pointer">
            <NotificationIcon />
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <img src={profilePic} alt="profile-pic" className="w-[48px] h-[48px] rounded-full object-cover hidden md:inline-block" />
            <p className="flex items-center gap-2 text-base text-[#000] cursor-pointer">
              MKS
              <FaChevronDown size={14} />
            </p>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div
        className={`fixed top-0 left-0 bg-[#00000099] block xl:hidden transition-all duration-400 overflow-y-scroll ${
          modalOpen ? "opacity-100 inset-0 z-[1]" : "opacity-0"
        }`}
        onClick={handleModal}
      >
      </div>
      <div
          className={`transition-all duration-500 m-4 absolute top-0 left-0 z-10 ${
            modalOpen ? "ml-4" : "ml-[-20rem]"
          }`}
        >
          <Aside />
      </div>
    </>
  );
};

export default Header;