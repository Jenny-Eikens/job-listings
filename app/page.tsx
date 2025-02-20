import React from 'react'
import fs from 'fs'
import path from 'path'
import JobList from './components/JobList'

{
  /* TODO
  - fix background fill of mobile background image
  - generateId() no longer needed??
  - fix filters getting squished on mobile screens -> find better solution
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
        <main className="m-auto flex min-h-[90vh] w-[85vw] max-w-[1000px] justify-center pt-[calc(100vh/3)] md:pt-[calc(100vh/5)] lg:pt-[calc(100vh/4)]">
          {/* MAIN CONTENT */}
          <JobList listings={listings}></JobList>
        </main>
        <footer className="mt-6 p-2 text-center text-sm">
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
