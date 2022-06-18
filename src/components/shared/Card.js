import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <div className="mx-6 my-4">
      {children}
    </div>
  </div>
  )
}

export default Card;
