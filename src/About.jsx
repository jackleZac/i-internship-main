import React from 'react'

function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Our Mission
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
          Our Internship Online Platform is a comprehensive web-based solution designed to connect students and graduates with internship opportunities across various industries. With an intuitive interface and powerful features, our platform serves as a bridge between aspiring interns and companies offering valuable learning experiences
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;