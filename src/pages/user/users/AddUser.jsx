import React, { useState } from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import profileImg from "../../../assets/images/header/profilepic.webp";
import Button from "../../../components/shared/button/Button";
import { IoCamera } from "react-icons/io5";

const AddUser = ({onClose}) => {
  const [imgSrc, setImgSrc] = useState(null)
  const nationalitySelectHandler = (option) => (console.log(option))
  const genderSelectHandler = (option) => (console.log(option))
  const professionSelectHandler = (option) => (console.log(option))
  const workingStatusSelectHandler = (option) => (console.log(option))
  const workingHoursSelectHandler = (option) => (console.log(option))
  const uploadImgHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <form className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
      <div className="lg:col-span-9">
        <div className="grid lg:grid-cols-12 gap-1 md:gap-4">
          <div className="lg:col-span-12">
            <Input
              type="text"
              label="Full Name"
              placeholder="Full Name"
              labelWeight="font-semibold"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              labelWeight="font-semibold"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="date"
              label="Date of Birth"
              labelWeight="font-semibold"
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="ID/Passport Number"
              placeholder="ID/Passport Number"
              labelWeight="font-semibold"
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Nationality" />
            <Dropdown
              options={[{ option: "Saudi Arabia" }, { option: "UAE" }]}
              onSelect={nationalitySelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Gender" />
            <Dropdown
              options={[{ option: "Male" }, { option: "Female" }]}
              onSelect={genderSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Profession" />
            <Dropdown
              options={[{ option: "Supervisor" }, { option: "Labour" }]}
              onSelect={professionSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Working Status" />
            <Dropdown
              options={[{ option: "On leave" }, { option: "Working" }]}
              onSelect={workingStatusSelectHandler}
            />
          </div>
          <div className="lg:col-span-6 mb-4">
            <Label label="Working Hours" />
            <Dropdown
              options={[
                { option: "12:00 pm To 08:00 am" },
                { option: "09:00 pm To 06:00 am" },
                { option: "09:00 am To 06:00 pm" },
              ]}
              onSelect={workingHoursSelectHandler}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <img
          src={imgSrc || profileImg}
          alt=""
          className="w-[278px] h-[278px] object-cover rounded-full mb-4"
        />
        <div className="flex justify-center">
          <ChangePhoto onChange={uploadImgHandler} />
        </div>
      </div>
      <div className="lg:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
            height="h-[45px] md:h-[60px]"
          />
          <Button type='submit' text="Add" width="w-[150px]" height="h-[45px] md:h-[60px]" />
        </div>
      </div>
    </form>
  );
};

export default AddUser;

const Label = ({ label }) => (
  <label className="text-[#000] text-base mb-2 block font-semibold">
    {label}
  </label>
);

const ChangePhoto = ({ onChange }) => (
  <button
    type="button"
    className="relative cursor-pointer bg-[rgb(12,103,188)] text-white font-medium h-[45px] md:h-[60px] w-[200px] rounded-xl flex items-center gap-1 justify-center"
  >
    Change Photo
    <IoCamera fontSize={20} />
    <input
      type="file"
      onChange={onChange}
      className="absolute inset-0 z-50 cursor-pointer opacity-0"
    />
  </button>
);
