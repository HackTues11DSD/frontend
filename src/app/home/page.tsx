'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from '../../components/tooltip';
import Component from "@/components/navigation_bar";

export function Navigation() {
  return <Component />;
}

interface BodyPart {
  id: string;
  name: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
  conditions: string[];
}

const HomePage = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const bodyParts: BodyPart[] = [
    {
      id: 'head',
      name: 'Head',
      position: { top: '5%', left: '50%', width: '15%', height: '15%' },
      conditions: ['Headaches', 'Migraines', 'Concussion']
    },
    {
      id: 'neck',
      name: 'Neck',
      position: { top: '15%', left: '50%', width: '12%', height: '8%' },
      conditions: ['Neck Pain', 'Stiffness', 'Whiplash']
    },
    {
      id: 'shoulder',
      name: 'Shoulders',
      position: { top: '22%', left: '50%', width: '28%', height: '8%' },
      conditions: ['Frozen Shoulder', 'Shoulder Pain', 'Rotator Cuff Injury']
    },
    {
      id: 'chest',
      name: 'Chest',
      position: { top: '30%', left: '50%', width: '25%', height: '12%' },
      conditions: ['Chest Pain', 'Shortness of Breath', 'Heart Conditions']
    },
    {
      id: 'abdomen',
      name: 'Abdomen',
      position: { top: '42%', left: '50%', width: '22%', height: '12%' },
      conditions: ['Abdominal Pain', 'Digestive Issues', 'Food Poisoning']
    },
    {
      id: 'back',
      name: 'Back',
      position: { top: '35%', left: '50%', width: '25%', height: '15%' },
      conditions: ['Back Pain', 'Sciatica', 'Herniated Disc']
    },
    {
      id: 'arm',
      name: 'Arms',
      position: { top: '35%', left: '27%', width: '10%', height: '20%' },
      conditions: ['Arm Pain', 'Tennis Elbow', 'Carpal Tunnel']
    },
    {
      id: 'leg',
      name: 'Legs',
      position: { top: '65%', left: '45%', width: '25%', height: '25%' },
      conditions: ['Leg Pain', 'Knee Pain', 'Ankle Sprain']
    },
    {
      id: 'foot',
      name: 'Feet',
      position: { top: '90%', left: '45%', width: '20%', height: '8%' },
      conditions: ['Foot Pain', 'Plantar Fasciitis', 'Bunions']
    }
  ];

  const handlePartClick = (part: BodyPart) => {
    setSelectedPart(part);
    setTooltipVisible(true);
  };

  const closeTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  to-green-100">
      <Head>
        <title>HealthGuide - Understand Your Body Better</title>
        <meta name="description" content="Learn about symptoms, causes, and treatments for different body parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Understand Your Body Better</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any body part to learn about potential symptoms, causes, and treatments.
          </p>
        </div>

        {/* Main Interactive Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Common Issues Section */}
            <div className="w-full lg:w-1/4 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Common Issues</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Headaches</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Joint Pain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Back Pain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Muscle Strain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Digestive Issues</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Sleep Problems</span>
                </li>
              </ul>
            </div>

            {/* Human Body Diagram */}
            <div className="w-full lg:w-2/4 p-4 relative flex justify-center items-center">
              <div className="relative w-64 h-96 lg:w-80 lg:h-120">
                <Image
                  src="/human-body-outline.svg"
                  alt="Human Body Diagram"
                  layout="fill"
                  objectFit="contain"
                />
                
                {bodyParts.map((part) => (
                  <div
                    key={part.id}
                    className="absolute hover:bg-green-200 hover:bg-opacity-40 rounded-full cursor-pointer transition-all duration-300"
                    style={{
                      top: part.position.top,
                      left: part.position.left,
                      width: part.position.width,
                      height: part.position.height,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onClick={() => handlePartClick(part)}
                  />
                ))}
                
                {tooltipVisible && selectedPart && (
                  <Tooltip 
                    title={selectedPart.name}
                    content={`Common conditions: ${selectedPart.conditions.join(', ')}`}
                    onClose={closeTooltip}
                    linkTo={`/body-parts/${selectedPart.id}`}
                    linkText="Learn More"
                  />
                )}
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="w-full lg:w-1/4 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Quick Actions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/search-symptoms" className="flex items-center p-2 hover:bg-green-100 rounded">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <span>Search Symptoms</span>
                  </Link>
                </li>
                <li>
                  <Link href="/find-doctors" className="flex items-center p-2 hover:bg-green-100 rounded">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>Find Doctors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/emergency" className="flex items-center p-2 hover:bg-green-100 rounded">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Emergency Info</span>
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="flex items-center p-2 hover:bg-green-100 rounded">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>Book Appointment</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
            <p className="text-gray-600">Get preliminary information about your symptoms</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Specialists</h3>
            <p className="text-gray-600">Connect with healthcare professionals near you</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Records</h3>
            <p className="text-gray-600">Keep track of your medical history</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-black ">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About HealthGuide</h4>
              <p className="text-green-500">Your trusted source for understanding body symptoms and finding the right care.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/symptom-checker" className="text-green-500 hover:text-green-300">Symptom Checker</Link></li>
                <li><Link href="/find-a-doctor" className="text-green-500 hover:text-green-300">Find a Doctor</Link></li>
                <li><Link href="/medical-articles" className="text-green-500 hover:text-green-300">Medical Articles</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>support@healthguide.com</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>1-800-HEALTH</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-500 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-500 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-500 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"></path>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>
                </a>
                <a href="#" className="text-green-500 hover:text-green-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-6 text-center">
            <p>&copy; 2025 HealthGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;