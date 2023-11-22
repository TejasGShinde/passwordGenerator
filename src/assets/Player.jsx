import React from 'react'

const Player = ({player}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 transform hover:scale-105 transition-transform duration-300 ease-out">
    <img className="w-full h-48 object-cover" src="cricket-image.jpg" alt="Cricket Player" />
    <div className="px-6 py-4">
      <div className="font-bold text-2xl mb-2 text-white">Cricket Player</div>
      <p className="text-gray-200 text-lg">
        Runs: 5000<br />
        Wickets: 100<br />
        Batting Average: 45.67<br />
        Bowling Average: 22.5
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Team: XYZ
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Format: T20
      </span>
    </div>
  </div>
  )
}

export default Player