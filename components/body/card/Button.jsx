/**
 * The Button component in React takes a content prop and renders it inside a div with the class
 * "btn-sort".
 * @returns A `<div>` element with the class name "btn-sort" and the content passed in as a prop.
 */
import React from 'react'


const Button = ({content}) => {

    
  return (
    <div className="btn-sort">{ content }</div>
  )
}

export default Button