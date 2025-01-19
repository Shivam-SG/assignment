import React from 'react'

const Box = () => {
  return (
    <div className="grid grid-cols-2 gap-1 w-12 h-12">
        <div className="border-2 border-[#6d6c6c] rounded-t-md rounded-bl-md"></div>
        <div className="border-2 border-[#6d6c6c] rounded-t-md rounded-br-md"></div>
        <div className="border-2 border-[#6d6c6c] rounded-b-md rounded-tl-md"></div>
        <div className="border-2 border-[#6d6c6c] rounded-b-md rounded-tr-md"></div>
    </div>
  )
}

export default Box