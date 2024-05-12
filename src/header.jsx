import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';


let navigation = [
    { name: 'HOME', href: '/i-internship-main', current: false},
    { name: 'APPLICATION', href: '/i-internship-main/applications', current: false},
    { name: 'ABOUT US', href: '/i-internship-main//about', current: false}
]

export const Header = () => {
  // Check the current page
  return (
    <div>
      <header>
          <nav className='flex flex-row justify-between bg-[#40826D]'>
            <div className="relative my-8 mx-auto max-md:hidden">
              {navigation.map((item) => (
                <Link
                    key={item.name} 
                    to={item.href} 
                    className='px-4 py-2 text-white hover:drop-shadow-lg'>
                    {item.name}
                </Link>
              ))}
            </div>
        </nav>
      </header>
    </div>
  )
}