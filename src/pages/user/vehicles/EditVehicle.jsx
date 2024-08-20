import React, { useState } from "react";
import CameraIcon from "../../../assets/svgs/vehicles/CameraIcon";
import profile from "../../../assets/images/header/profilepic.webp";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { brandOptions } from "../../../data/data";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";

const EditVehicle = () => {
  const [imgSrc, setImgSrc] = useState("");

  const imgSrcHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const brandOptionsHander = (option) => {
    console.log("selected option:", option);
  };
  return (
    <form className="w-full grid md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
      <div className="md:col-span-12 relative bg-[#f9f9f9] rounded[5px] relative shadow-md">
        <img
          src={imgSrc || profile}
          alt="profile"
          className="w-full h-[300px] object-cover rounded-md"
        />
        <UploadImage onChange={imgSrcHandler} />
      </div>
      <div className="md:col-span-6">
        <Input
          label="Vehicle Name"
          placeholder="Vehicle Name"
          labelWeight="font-semibold"
        />
      </div>
      <div className="md:col-span-3">
        <Label label="Brand" />
        <Dropdown options={brandOptions} onSelect={brandOptionsHander} />
      </div>
      <div className="md:col-span-3">
        <Input label="Identification Number" labelWeight="font-semibold" />
      </div>
      <div className="md:col-span-6">
        <Input label="License Plate Number" labelWeight="font-semibold" />
      </div>
      <div className="md:col-span-6">
        <Label label="Project" />
        <Dropdown options={brandOptions} onSelect={brandOptionsHander} />
      </div>
      <div className="md:col-span-4">
        <Label label="Color" />
        <Dropdown options={brandOptions} onSelect={brandOptionsHander} />
      </div>
      <div className="md:col-span-4">
        <Label label="Assign To" />
        <Dropdown options={brandOptions} onSelect={brandOptionsHander} />
      </div>
      <div className="md:col-span-4">
        <Label label="Add Sensor" />
        <Dropdown options={brandOptions} onSelect={brandOptionsHander} />
      </div>
      <div className="md:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
          />
          <Button type='submit' text="Add" width="w-[150px]" height="h-[60px]" />
        </div>
      </div>
    </form>
  );
};

export default EditVehicle;

const UploadImage = ({ onChange }) => {
  return (
    <button
      type="button"
      className="absolute bottom-2 right-2 flex flex-col items-center gap-2 text-sm md:text-base text-primary cursor-pointer bg-white p-2 rounded-md"
    >
      <CameraIcon />
      <input
        type="file"
        className="absolute top-[-100%] left-0 inset-0 cursor-pointer opacity-0"
        onChange={onChange}
      />
    </button>
  );
};

const Label = ({ label }) => {
  return (
    <label className="text-[#000] text-base mb-2 block font-semibold">
      {label}
    </label>
  );
};
