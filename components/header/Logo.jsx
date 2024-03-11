import React from 'react'

const Logo = ({logo}) => {
  return (
      <div className="w-5 h-7" >
          <img height="50px" src={logo}/>
      </div>
  )
}

export default Logo