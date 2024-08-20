import DataTable from 'react-data-table-component'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import AddIcon from '../../../assets/svgs/AddIcon'
import Title from '../../../components/shared/title/Title'
import Modal from '../../../components/modals/Modal'
import { useState } from 'react'
import { IoEye } from "react-icons/io5";
import EditIcon from '../../../assets/svgs/EditIcon'
import { vehiclesData } from '../../../data/data'
import { useNavigate } from 'react-router-dom'
import EditReport from './EditReport'

const columns = (modalOpenHandler) => [
  {
    name: 'Vehicle name',
    selector: (row) => row.vehicleName
  },
  {
    name: 'Brand',
    selector: (row) => row.brand
  },
  {
    name: 'Car Registration',
    selector: (row) => row.carRegistration
  },
  {
    name: 'Assign to',
    selector: (row) => row.assignTo
  },
  {
    name: 'Project',
    selector: (row) => row.project
  },
  {
    name: 'Action',
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => modalOpenHandler('edit')}>
          <EditIcon />
        </div>
        <div className="cursor-pointer">
          <DeleteIcon />
        </div>
      </div>
    )
  },
]

const ContractorsViolation = () => {
  const [modal, setModal] = useState(false);
  
  const modalOpenHandler = (modalType) => {
    setModal(modalType)
  }
  const modalCloseHandler = () => {
    setModal(false)
  }
  return (
    <div className='bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden'>
      <div className="flex items-center justify-between">
        <div>
          <Title title="Violations" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => modalOpenHandler('add')}>
            <AddIcon />
          </div>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler)}
          data={vehiclesData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === 'edit' && (
        <Modal title='Violation Report' width='w-[300px] md:w-[600px]' onClose={modalCloseHandler}>
          <EditReport onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  )
}

export default ContractorsViolation

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
      borderBottomWidth: '0 !important'
    },
  },
  cells: {
    style: {
      color: 'rgba(17, 17, 17, 1)',
      fontSize: '14px'
    }
  }
};
