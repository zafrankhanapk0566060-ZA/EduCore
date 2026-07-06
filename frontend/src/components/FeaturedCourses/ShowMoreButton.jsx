import React from 'react'

const ShowMoreButton = ({ showAll, setShowAll }) => {
  return (

    <button
      className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-all duration-300"
      onClick={() => setShowAll(!showAll)}
    >
      {
        showAll ? "Show Less"
          : 'Show More'
      }
    </button>

  )
}

export default ShowMoreButton
