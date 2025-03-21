'use client'



import React from 'react';
import Link from 'next/link';

interface TooltipProps {
  title: string;
  content: string;
  onClose: () => void;
  linkTo: string;
  linkText: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  title, 
  content, 
  onClose,
  linkTo,
  linkText
}) => {
  return (
    <div 
      className="absolute z-10 bg-white rounded-lg shadow-lg p-4 w-64 border border-green-200"
      style={{
        top: '50%',
        left: '120%',
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <h4 className="font-bold text-lg text-green-700 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{content}</p>
      <Link href={linkTo}>
        <div className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer">
          {linkText}
        </div>
      </Link>
    </div>
  );
};