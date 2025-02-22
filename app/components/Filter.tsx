import React from 'react'

interface FilterProps {
  filters: string[]
  removeFilter: (filter: string) => void
  clearFilters: () => void
}

const Filter = ({ filters, removeFilter, clearFilters }: FilterProps) => {
  return (
    <>
      <div className="skills mb-10 mt-[-4rem] flex justify-between rounded-md bg-white p-4 font-[700] shadow-md">
        <div className="flex flex-wrap gap-[1rem]">
          {filters.map((filter, index) => (
            // overflow-hidden solved issue of right-hand border no longer being rounded due to button
            // min-h added to prevent squishing when items wrap -> not ideal solution
            <span
              key={index}
              className="flex min-h-[40px] items-center gap-[0.5rem] overflow-hidden rounded-md bg-filter-tablets pl-2 text-primary"
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
        </div>

        <button
          className="p-2 text-dark-cyan transition-all duration-150 hover:text-primary hover:underline"
          onClick={() => clearFilters()}
          aria-label="Clear filters"
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default Filter
