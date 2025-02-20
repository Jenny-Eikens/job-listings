import React from 'react'
import { Listing } from './JobList'

interface JobProps {
  listing: Listing
  addFilter: (filter: string) => void
}

// const generateId = () => crypto.randomUUID()

const Job = ({ listing, addFilter }: JobProps) => {
  return (
    <>
      <div
        className={`job rounded-md bg-white p-4 pt-0 shadow-md md:pt-4 ${listing.featured && 'border-l-[5px] border-primary'}`}
      >
        {/* MAJOR LEARNING MOMENT: scaling always happens from the center, so the image will shift. To preven this, apply transform-origin: left */}
        <img
          src={listing.logo}
          alt="Company logo"
          className="logo origin-left translate-y-[-50%] scale-75 md:relative md:-translate-y-0 md:scale-100"
        />
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
        <a href="#">
          <h2 className="position flex items-center text-lg font-[700] text-v-dark-cyan">
            {listing.position}
          </h2>
        </a>
        <div className="job-info">
          <div className="flex items-center space-x-2">
            <span className="posted-at">{listing.postedAt}</span>
            <span className="text-lg">&bull;</span>
            <span className="contract">{listing.contract}</span>
            <span className="textlg">&bull;</span>
            <span className="location">{listing.location}</span>
          </div>
          <hr className="my-3 bg-v-dark-cyan lg:hidden" />
        </div>

        {/* MAJOR LEARNING MOMENT: see mapping below */}
        <div className="skills mt-[-1rem] flex flex-wrap gap-[1rem] font-[700] md:mt-0 lg:justify-end">
          {[
            listing.role,
            listing.level,
            ...listing.languages,
            ...listing.tools,
          ].map((skill, index) => (
            <button
              key={index}
              className="skill transition-colors hover:bg-primary hover:text-white"
              onClick={() => addFilter(skill)}
              aria-label={`Add ${skill} to filters`}
            >
              {skill}
            </button>
          ))}
          {/* <button className="skill">{listing.role}</button>
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
            ))} */}
        </div>
      </div>
    </>
  )
}

export default Job
