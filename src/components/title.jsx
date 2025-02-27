import React from 'react'

export default function Comp(props) {
  return (
    <span 
    className='
      mt-10
      text-center 
      custom-color
      text-gray-950 
      p-[3vh]
    '>{props.title}</span>
  )
}
