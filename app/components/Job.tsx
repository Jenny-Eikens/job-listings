import React from 'react'
import { Listing } from './JobList'

interface JobProps {
  listing: Listing
}

// const generateId = () => crypto.randomUUID()

const Job = ({ listing }: JobProps) => {
  return (
    <>
      <div
        className={`job relative rounded-md bg-white p-4 shadow-md ${listing.featured && 'border-l-[5px] border-primary'}`}
      >
        <div className="logo translate-y-[-50%] md:relative md:-translate-y-0">
          <img
            src={listing.logo}
            alt="Company logo"
            className="scale-75 md:scale-100"
          />
        </div>
        <div className="company flex space-x-6">
          <h1 className="font-[700] text-primary">{listing.company}</h1>
          <div className="tags space-x-2">
            {listing.new && (
              <span className="rounded-full bg-primary p-2 font-[700] text-white">
                NEW!
              </span>
            )}
            {listing.featured && (
              <span className="rounded-full bg-v-dark-cyan p-2 font-[700] text-white">
                FEATURED
              </span>
            )}
          </div>
        </div>
        <h2 className="position flex items-center font-[700] text-v-dark-cyan">
          {listing.position}
        </h2>
        <div className="job-info space-x-3">
          <span className="posted-at">{listing.postedAt}</span>
          <span className="contract">{listing.contract}</span>
          <span className="location">{listing.location}</span>
        </div>
        <div className="skills flex flex-wrap gap-[1rem] font-[700] md:justify-end">
          <button className="skill">{listing.role}</button>
          <button className="skill">{listing.level}</button>
          {listing.languages.map((language, index) => (
            <button key={index} className="skill">
              {language}
            </button>
          ))}

          {listing.tools.length !== 0 &&
            listing.tools.map((tool, index) => (
              <button key={index} className="skill">
                {tool}
              </button>
            ))}
        </div>
      </div>
    </>
  )
}

export default Job
