import React from 'react'
import Title from '../../../../components/shared/title/Title'
import BarChartComponent from '../../../../components/charts/barChart/BarChartComponent'
import { barLineData } from '../../../../data/data'

const colors = {start: '#00937A', end: '#00aAC799'}

const VehiclesData = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:gap-6'>
      <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
        <Title title='Count Of Vehicles Per Contractor' />
        <BarChartComponent data={barLineData} barSize={20} gradientID='vehiclesPerContractor' />
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-[12px] drop-shadow-md">
        <Title title='Count Of Vehicles By Brand' />
        <BarChartComponent data={barLineData} barSize={20} colors={colors} gradientID='vehiclesByBrand' />
      </div>
    </div>
  )
}

export default VehiclesData