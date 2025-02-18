import React from 'react'
import Job from './Job'

export interface Listing {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

interface JobListProps {
  listings: Listing[]
}

const JobList = ({ listings }: JobListProps) => {
  return (
    <>
      <div className="w-full space-y-3">
        {listings.map((listing: Listing) => (
          <Job key={listing.id} listing={listing} />
        ))}
      </div>
    </>
  )
}

export default JobList
