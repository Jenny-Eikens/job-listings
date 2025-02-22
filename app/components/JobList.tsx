'use client'
import React, { useState } from 'react'
import Job from './Job'
import Filter from './Filter'

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
  const [filters, setFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  const clearFilters = () => {
    setFilters([])
  }

  let filteredJobs
  if (filters.length === 0) {
    filteredJobs = listings
  } else {
    const matchingJobs = listings.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
      return filters.every((filter) => jobTags.includes(filter))
    })

    filteredJobs = matchingJobs
  }

  return (
    <>
      <div className="w-full">
        {filters.length > 0 && (
          <Filter
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        )}
        <div className="space-y-10 md:space-y-6">
          {filteredJobs.map((listing: Listing) => (
            <Job key={listing.id} listing={listing} addFilter={addFilter} />
          ))}
        </div>
      </div>
    </>
  )
}

export default JobList
