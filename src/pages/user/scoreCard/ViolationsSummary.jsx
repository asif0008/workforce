import React from "react";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import { violationsSummaryData } from "../../../data/data";

const violationsLists = [
    {
        value: 'Visitor exceeds the time allowed to visit',
        percentage: '70'
    },
    {
        value: 'Use someone else vehicle',
        percentage: '50'
    },
    {
        value: 'Lost smart badge',
        percentage: '30'
    },
]

const ViolationsSummary = () => {
  return (
    <div className="shadow-md p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold">Violations Summary</h2>
        <select className="focus:outline-none text-sm text-[#00000099]">
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
        </select>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <PieChartComponent
          data={violationsSummaryData}
          innerRadius={60}
          outerRadius={90}
          centerIcon="%"
          layout="center-percentage"
        />
      </div>
      <p className="mt-6 text-sm md:text-base mb-4">Frequent Violations</p>
      {violationsLists.map((item, i) => (
        <ViolationsList value={item.value} percentage={item.percentage} key={i} />
      ))}
    </div>
  );
};

export default ViolationsSummary;

const ViolationsList = ({value, percentage}) => {
    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="px-4 py-2 bg-[#f78d2c26] text-[9px] sm:text-sm rounded-full" style={{flexBasis: percentage ? `${percentage}%`:'unset'}}>
                {value}
            </div>
            <p className="text-sm">{percentage}%</p>
        </div>
    )
}