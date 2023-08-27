import React from 'react'

function FinishItem({ data }) {
  return (
    <article>
      <div>
        <p>{data.name}</p>
      </div>
        <div>
            <img className='w-[200px]' src={data.imageUrl} alt={data.id} />
        </div>
    </article>
  )
}

export default FinishItem