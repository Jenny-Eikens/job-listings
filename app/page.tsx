import React from 'react'
import fs from 'fs'
import path from 'path'
import JobList from './components/JobList'

{
  /* TODO
  - fix background fill of mobile background image
  - fix types for listings in JobList component
  */
}

async function fetchListings() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data.json')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    if (!data) {
      throw new Error('Unable to retrieve data')
    }
    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return null
  }
}

const Home = async () => {
  const listings = await fetchListings() // curly braces necessary??

  if (!listings) {
    console.error('Missing required data:', { listings })
    return <div>Error loading data</div>
  }
  return (
    <>
      <div>
        <main className="m-auto min-h-[90vh] w-[90vw] max-w-[1000px]">
          {/* MAIN CONTENT */}
          <JobList listings={listings}></JobList>
        </main>
        <footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0">
          <div>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://github.com/Jenny-Eikens" target="_blank">
              Jennifer Eikens
            </a>
            .
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
