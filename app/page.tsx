import React from 'react'
import fs from 'fs'
import path from 'path'
import JobList from './components/JobList'

{
  /* TODO
  - fix background fill of mobile background image
  - find better solution for margin-top of JobList
  - add dot symbol between job info
  - generateId() no longer needed??
  - figure out positioning of logo
  - fix filters getting squished on mobile screens
  - fix position of clear button on mobile screens
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
  const listings = await fetchListings()

  if (!listings) {
    console.error('Missing required data:', { listings })
    return <div>Error loading data</div>
  }
  return (
    <>
      <div>
        <main className="m-auto mt-[12rem] flex min-h-[90vh] w-[85vw] max-w-[1000px] justify-center">
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
