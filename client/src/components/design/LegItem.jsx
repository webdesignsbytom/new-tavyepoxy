import React from 'react'

function LegItem({ data }) {
  return (
    <div>LegItem
        <div>
            <img className='w-[200px]' src={data.imageUrl} alt={data.id} />
        </div>
    </div>
  )
}

export default LegItem