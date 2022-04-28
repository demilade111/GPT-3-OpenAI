import React from 'react'

function Features({heading,title}) {
    return (
        <div>
          <div className="gpt-line w-12 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
         <h2 className="text-white font-semibold text-xl  my-5">{heading}</h2>
         <p className="mb-14 mt-5 text-sm font-semibold tracking-wide">{title}</p>
            
        </div>
    )
}

export default Features
