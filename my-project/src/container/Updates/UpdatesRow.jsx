// UpdatesRow.jsx
import React, { useState } from 'react';
import Updates from './updates';
import './animations.css'; // Ensure this import

function UpdatesRow() {
  const [showAllUpdates, setShowAllUpdates] = useState(false);

  const handleViewAllClick = () => {
    setShowAllUpdates(!showAllUpdates);
  };

  return (
    <>
     <style>
        {`
          body {
            background-color: #e6eaf0; /* Set the background color to a muted tone */
          }
        `}
      </style>
      <div className="text-center">
        <h1 className="text-4xl font-sans mt-10 mb-0 text-yellow-600 tracking-wider">
          NGO Newsroom: Stay Updated with Our Latest Updates
        </h1>
      </div>

      <div className="flex justify-between items-center mt-20 mb-1 px-6">
        <h1 className="text-5xl mt-30 mb-10 font-bold elegant-handwriting"> Our Recent News and Updates </h1>
        <button 
          className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-0 mb-9"
          onClick={handleViewAllClick}
        >
          {showAllUpdates ? 'Show Less' : 'View All Updates'}
        </button>
      </div>
      
      <div className="flex flex-col space-y-10">
        <div className="flex justify-between mb-8 w-full px-6">
          <div className="flex-grow mx-2 slide-in-from-left">
            <Updates />
          </div>
          <div className="flex-grow mx-2 slide-in-from-right">
            <Updates />
          </div>
        </div>
        
        {showAllUpdates && (
          <>
            <div className="flex justify-between mb-8 w-full px-6">
              <div className="flex-grow mx-2 slide-in-from-left">
                <Updates />
              </div>
              <div className="flex-grow mx-2 slide-in-from-right">
                <Updates />
              </div>
            </div>

            <div className="flex justify-between mb-8 w-full px-6">
              <div className="flex-grow mx-2 slide-in-from-left">
                <Updates />
              </div>
              <div className="flex-grow mx-2 slide-in-from-right">
                <Updates />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default UpdatesRow;
