import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { internshipList } from './datasets/internshipsList';
  

export default function ApplyForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedInternship, setSelectedInternship] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    // For example, send form data to a server
    setMessage('Your application has been submitted!');
    // Reset form fields after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setResume(null);
  };

  const {id} = useParams();
  console.log(internshipList);

  useEffect(() => {
    const internship = internshipList.find((post) => post.id === parseInt(id));
    setSelectedInternship(internship);
    console.log(internship);
  }, [id]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send Your Resume Here</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
             Applying for {selectedInternship.title} at {selectedInternship.company}
            </p>
        </div>
        </div>
      <div className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <form onSubmit={handleSubmit} className='mx-auto my-4 px-8 py-4 pt-10 shadow-md w-fit rounded-md grid grid-cols-1 gap-y-3'>
            <div className='grid grid-cols-1'>
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className='border-2 rounded '
            />
            </div>
            <div className='grid grid-cols-1'>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='border-2 rounded '
            />
            </div>
            <div className='grid grid-cols-1'>
            <label htmlFor="position">Position Applied:</label>
            <input
                type="text"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
                className='border-2 rounded '
            />
            </div>
            <div className='grid grid-cols-1'>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className='border-2 rounded '
            />
            </div>
            <div className='grid grid-cols-1'>
            <label htmlFor="resume">Resume:</label>
            <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                required
                className='border-2 rounded '
            />
            </div>
            <button type="submit" className='border border-sky-500 py-1 px-4 rounded-md'>Submit Application</button>
        </form>
    </div>
  </div>
  );
}
