import React from "react";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import { topContractorsData } from "../../../data/data";
import OneIcon from '../../../assets/svgs/score/OneIcon'
import TwoIcon from '../../../assets/svgs/score/TwoIcon'
import ThreeIcon from '../../../assets/svgs/score/ThreeIcon'

const icons = [OneIcon, TwoIcon, ThreeIcon];
const dataList = [
    {name: 'Ahmad Nazeer', value: '105'},
    {name: 'Muhammad Azam', value: '103'},
    {name: 'Ashraf Malik', value: '95'},
]

const TopContractors = () => {
  return (
    <div className="shadow-md p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold">Top Contractors</h2>
        <select className="focus:outline-none text-sm text-[#00000099]">
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
        </select>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={topContractorsData}
          innerRadius={60}
          outerRadius={90}
          centerIcon="%"
          layout="center-percentage"
        />
      </div>
      <div className="mt-6">
        {dataList.map((item, i) => (
            <DataList data={item} iconComponent={icons[i]} />
        ))}
      </div>
    </div>
  );
};

export default TopContractors;

const DataList = ({data, iconComponent: IconComponent}) => {
    return (
        <div className="flex items-center justify-between gap-4 bg-[#50d4500d] p-4 rounded-lg mb-4">
            <div className="flex items-center gap-2">
                <IconComponent className='w-6 h-6' />
                <p className="text-sm font-semibold">{data.name}</p>
            </div>
            <p className="text-base font-semibold">{data.value}</p>
        </div>
    )
}



