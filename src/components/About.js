import React from 'react'

function About({title}) {
    return (
        <div>
         <div className="gpt-line w-12 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mt-10 lg:mt-0"></div>
            <h1 className="text-white lg:text-xs text-sm mt-4 font-normal">{title}</h1>
        </div>
    )
}

export default About
