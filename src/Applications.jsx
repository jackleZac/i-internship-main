import React from 'react';

const applications = [
  {
    id: 1,
    title: 'Frontend Development Internship',
    company: 'WebTech Solutions',
    location: 'San Francisco, CA',
    dateApplied: 'May 10, 2024',
    status: 'pending'
  },
  {
    id: 2,
    title: 'UX/UI Design Internship',
    company: 'Creative Designs Studio',
    location: 'London, UK',
    dateApplied: 'May 15, 2024',
    status: 'rejected'
  }
];


function Applications() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Application</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            View Your Internship Application Here
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {applications.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <p className="text-gray-500">
                  Applied on {post.dateApplied}
                </p>
                <p
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.status}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                  {post.company}
                  </p>
                  <p className="text-gray-600">{post.location} | {post.duration}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Applications;