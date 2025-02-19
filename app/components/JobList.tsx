'use client'
import React, { useEffect, useState } from 'react'
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
  const [filters, setFilters] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(listings)

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

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobs(listings)
      return
    }

    const matchingJobs = listings.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
      return filters.every((filter) => jobTags.includes(filter))
    })

    setFilteredJobs(matchingJobs)
  }, [filters, listings])

  return (
    <>
      <div className="w-full">
        {filters.length > 0 && (
          <div className="skills mb-10 mt-[-4rem] flex flex-wrap gap-[1rem] rounded-md bg-white p-4 font-[700] shadow-md">
            {filters.map((filter, index) => (
              // overflow-hidden solved issue of right-hand border no longer being rounded due to button
              <span
                key={index}
                className="flex items-center gap-[0.5rem] overflow-hidden rounded-md bg-filter-tablets pl-2 text-primary"
              >
                {filter}
                <button
                  aria-label={`Remove ${filter} from filters`}
                  className="flex h-full items-center justify-center bg-primary px-2 transition-colors hover:bg-v-dark-cyan"
                  onClick={() => removeFilter(filter)}
                >
                  <img src="/images/icon-remove.svg" alt="Remove filter icon" />
                </button>
              </span>
            ))}
            <button
              className="ml-auto p-2 text-dark-cyan transition-all duration-150 hover:text-primary hover:underline"
              onClick={() => clearFilters()}
            >
              Clear
            </button>
          </div>
        )}
        <div className="space-y-3">
          {filteredJobs.map((listing: Listing) => (
            <Job key={listing.id} listing={listing} addFilter={addFilter} />
          ))}
        </div>
      </div>
    </>
  )
}

export default JobList
