import React from 'react'

const Title = ({title}) => {
  return (
    <>
    <h4 className="text[#111111] text-base lg:text-lg font-semibold">
        {title}
      </h4>
      {/* diver */}
      <div className="w-[104px] h-[4px] bg-[#111111] rounded-xl mt-0"></div>
    </>
  )
}

export default Title