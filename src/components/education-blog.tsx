"use client"

import { useState, useEffect } from 'react'

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Blog: Armaan.Tech</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </nav>
        
        <article className="mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Rethinking Education: Breaking Free from the Box</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">By Armaan Zeyad, a 15 year old developer</p>
            
            <div className="prose dark:prose-invert max-w-none">
            <p className="mb-4">Our current education system, despite its many strengths, often falls into the trap of standardization—putting all students in the same metaphorical box. While this approach aims for equality, it may inadvertently stifle individual potential and creativity.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">The Problem with One-Size-Fits-All</h3>
              <p className="mb-4">Traditional education systems tend to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Prioritize standardized testing over individual growth</li>
                <li>Focus on a narrow set of academic skills</li>
                <li>Overlook different learning styles and paces</li>
                <li>Undervalue creative and practical intelligence</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">The Role of Teachers</h3>
              <p className="mb-4">Many teachers, constrained by rigid curricula and performance metrics, find themselves reinforcing this &apos;box.&apos; However, it&apos;s crucial to note that most educators are passionate about helping students succeed and are often aware of these limitations.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Breaking Free: A New Approach</h3>
              <p className="mb-4">To truly serve our students, we need an education system that:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Recognizes and nurtures individual talents and interests</li>
                <li>Embraces diverse learning styles and multiple intelligences</li>
                <li>Encourages critical thinking and creativity</li>
                <li>Prepares students for a rapidly changing world</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Conclusion</h3>
              <p className="mb-4">By acknowledging the limitations of our current system, we can work towards an educational approach that truly empowers every student to reach their full potential. This isn&apos;t about blaming teachers or schools, but about reimagining education for the 21st century and beyond.</p></div>
          </div>
        </article>
        
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2023 Armaan.Tech. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}