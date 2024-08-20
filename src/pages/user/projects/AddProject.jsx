import Input from "../../../components/auth/Input";
import { FaMapMarkerAlt } from "react-icons/fa";
import Select from "react-select";
import Button from '../../../components/shared/button/Button'

const users = [
  {
    label: "Asif Zulfiqar",
    value: "asif",
  },
  {
    label: "Hamza Nafasat",
    value: "hamza",
  },
  {
    label: "Ahmad",
    value: "ahmad",
  },
  {
    label: "Moiz",
    value: "moiz",
  },
  {
    label: "Abdul Wahid",
    value: "wahid",
  },
];

const AddProject = () => {
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <h2 className="text[#111111] text-lg 2xl:text-[20px] font-semibold">
        Add Project
      </h2>
      <form className="mt-4 md:mt-6 lg:mt-8 grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Input
            label="Project Name"
            type="text"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Start Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-4">
          <Input
            label="Due Date"
            type="date"
            height="h-[50px] md:h-[60px]"
            placeholder="Project 1"
            labelWeight="font-semibold"
          />
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">
            Project Description
          </label>
          <textarea
            cols={12}
            rows={5}
            className="bg-[#7bc0f726] border border-[#e2e5ff] rounded-[14px] w-full focus:outline-none p-4"
            placeholder="Project Description"
          ></textarea>
        </div>
        <div className="lg:col-span-12">
          <div className="relative">
            <Input
              label="Location"
              labelWeight="font-semibold"
              type="text"
              placeholder="Taetratech, Lakhpat Road, Lahore"
              height="h-[50px] md:h-[60px]"
            />
            <div className="absolute right-2 lg:right-5 bottom-[25%]">
              <FaMapMarkerAlt />
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <label className="text-[#000] text-base mb-2 block font-semibold">
            Add Labours
          </label>
          <div>
            <MultiSelectOption users={users} />
          </div>
        </div>
        <div className="lg:col-span-12 mt-4">
          <div className="flex items-center justify-end gap-2">
            <Button text='Cancel' color="#111111b3" bg="#76767640" width="w-[150px]" />
            <Button text='Add' width="w-[150px]" height="h-[60px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;

const MultiSelectOption = ({ users }) => {
  return (
    <Select
      options={users}
      placeholder="Select User"
      isMulti={true}
      styles={customStyles}
    />
  );
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.375rem",
    padding: "0.25rem",
    display: "flex",
    alignItems: "center",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "rgba(12, 106, 193, 0.13)",
    borderRadius: "34px",
    display: "flex",
    alignItems: "center",
    padding: "0.35rem 1rem",
    color: "rgba(17, 17, 17, 0.6)",
    position: 'relative'
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "rgba(17, 17, 17, 0.6)",
    fontSize: '14px'
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    cursor: "pointer",
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    top: '-4px',
    position: 'absolute',
    right: '0px',
    background: 'rgba(112, 112, 112, 1)'
  }),
};
