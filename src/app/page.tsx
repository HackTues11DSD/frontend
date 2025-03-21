"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@/components/tooltip";
import Component from "@/components/navigation_bar";
import Footer from "@/components/footer";

export function Navigation() {
  return <Component />;
}

export function PageFooter() {
  return <Footer />;
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
      id: "head",
      name: "Head",
      position: { top: "5%", left: "50%", width: "15%", height: "15%" },
      conditions: ["Headaches", "Migraines", "Concussion"],
    },
    {
      id: "neck",
      name: "Neck",
      position: { top: "15%", left: "50%", width: "12%", height: "8%" },
      conditions: ["Neck Pain", "Stiffness", "Whiplash"],
    },
    {
      id: "shoulder",
      name: "Shoulders",
      position: { top: "22%", left: "50%", width: "28%", height: "8%" },
      conditions: ["Frozen Shoulder", "Shoulder Pain", "Rotator Cuff Injury"],
    },
    {
      id: "chest",
      name: "Chest",
      position: { top: "30%", left: "50%", width: "25%", height: "12%" },
      conditions: ["Chest Pain", "Shortness of Breath", "Heart Conditions"],
    },
    {
      id: "abdomen",
      name: "Abdomen",
      position: { top: "42%", left: "50%", width: "22%", height: "12%" },
      conditions: ["Abdominal Pain", "Digestive Issues", "Food Poisoning"],
    },
    {
      id: "back",
      name: "Back",
      position: { top: "35%", left: "50%", width: "25%", height: "15%" },
      conditions: ["Back Pain", "Sciatica", "Herniated Disc"],
    },
    {
      id: "arm",
      name: "Arms",
      position: { top: "35%", left: "27%", width: "10%", height: "20%" },
      conditions: ["Arm Pain", "Tennis Elbow", "Carpal Tunnel"],
    },
    {
      id: "leg",
      name: "Legs",
      position: { top: "65%", left: "45%", width: "25%", height: "25%" },
      conditions: ["Leg Pain", "Knee Pain", "Ankle Sprain"],
    },
    {
      id: "foot",
      name: "Feet",
      position: { top: "90%", left: "45%", width: "20%", height: "8%" },
      conditions: ["Foot Pain", "Plantar Fasciitis", "Bunions"],
    },
  ];

  const handlePartClick = (part: BodyPart) => {
    setSelectedPart(part);
    setTooltipVisible(true);
  };

  const closeTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-100">
      <Head>
        <title>HealthGuide - Understand Your Body Better</title>
        <meta
          name="description"
          content="Learn about symptoms, causes, and treatments for different body parts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Understand Your Body Better
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on any body part to learn about potential symptoms, causes,
            and treatments.
          </p>
        </div>

        {/* Main Interactive Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Common Issues Section */}
            <div className="w-full lg:w-1/4 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                Common Issues
              </h3>
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
              <div className="relative w-64 h-96 lg:w-80 lg:h-[30rem]">
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
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => handlePartClick(part)}
                  />
                ))}

                {tooltipVisible && selectedPart && (
                  <Tooltip
                    title={selectedPart.name}
                    content={`Common conditions: ${selectedPart.conditions.join(
                      ", "
                    )}`}
                    onClose={closeTooltip}
                    linkTo={`/body-parts/${selectedPart.id}`}
                    linkText="Learn More"
                  />
                )}
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="w-full lg:w-1/4 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-4">
                Quick Actions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/treatments"
                    className="flex items-center p-2 hover:bg-green-100 rounded
                               transform transition-transform duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span>Search Symptoms</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/find-doctors"
                    className="flex items-center p-2 hover:bg-green-100 rounded
                               transform transition-transform duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <span>Find Doctors</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emergency"
                    className="flex items-center p-2 hover:bg-green-100 rounded
                               transform transition-transform duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Emergency Info</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/appointment"
                    className="flex items-center p-2 hover:bg-green-100 rounded
                               transform transition-transform duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
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
          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
            <p className="text-gray-600">
              Get preliminary information about your symptoms
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Specialists</h3>
            <p className="text-gray-600">
              Connect with healthcare professionals near you
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Records</h3>
            <p className="text-gray-600">Keep track of your medical history</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default HomePage;
