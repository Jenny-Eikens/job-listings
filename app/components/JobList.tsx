import React from 'react'

const JobList = ({ listings }: any) => {
  return (
    <>
      <div>JobList</div>
      {listings.map((listing) => (
        <div key={listing.id}>{listing.position} </div>
      ))}
    </>
  )
}

export default JobList
