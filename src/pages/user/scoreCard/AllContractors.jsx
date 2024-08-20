import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import EditIcon from '../../../assets/svgs/EditIcon';
import DeleteIcon from '../../../assets/svgs/DeleteIcon';
import { allContractorsData } from '../../../data/data';
import ProgressBar from '../../../components/shared/progress/ProgressBar';

const columns = (modalOpenHandler) => [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Contractors",
      selector: (row) => row.contractors,
    },
    {
      name: "Total Score",
      selector: (row) => (
        <ProgressBar value={row.totalScore} />
      ),
      width: '20%'
    },
    {
      name: "Violation Type",
      selector: (row) => (
        <div className="flex items-center flex-wrap gap-2">
          {row.violationType.map((type, i) => (
            <p className="text-sm text-[#f78d2c] px-4 py-2 rounded-full bg-[#f78d2c26]" key={i}>{type}</p>
          ))}
        </div>
      ),
      width: '30%'
    },
    {
      name: "Action",
      selector: () => (
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer"
            onClick={() => modalOpenHandler("edit")}
          >
            <EditIcon />
          </div>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

const AllContractors = ({modalOpenHandler}) => {
  return (
    <div className='shadow-md rounded-md p-4'>
        <div className="flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold">All Contractors</h2>
        <select className="focus:outline-none text-sm text-[#00000099]">
          <option value="this-week">View All</option>
        </select> 
      </div> 
     <div className="mt-5">
     <DataTable
       columns={columns(modalOpenHandler)}
       data={allContractorsData}
       selectableRows
       selectableRowsHighlight
       customStyles={tableStyles}
       pagination
       fixedHeader
       fixedHeaderScrollHeight="70vh"
     />
   </div>
    </div>
  )
}

export default AllContractors

const tableStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: 600,
        color: "rgba(17, 17, 17, 1)",
      },
    },
    rows: {
      style: {
        background: "rgba(123, 192, 247, 0.15)",
        borderRadius: "6px",
        padding: "14px 0",
        margin: "10px 0",
        borderBottomWidth: "0 !important",
      },
    },
    cells: {
      style: {
        color: "rgba(17, 17, 17, 1)",
        fontSize: "14px",
      },
    },
  };
  