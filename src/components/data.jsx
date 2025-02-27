import React from 'react'

export default function data(props) {
  return (
    <div className= {`flex flex-wrap flex-row w-full  justify-center sm:px-[5vw] items-center ${props.header&& 'justify-between'} `}>
        {props.img&& 
            <span className='object-cover flex-grow-1 sm:max-h-[400px] sm:max-w-[400px] overflow-hidden'>
                <img src={props.img}/>
            </span>
        }
        {props.header &&
            <span className='text-md  text-pretty flex flex-col break-normal text-right sm:w-3/6 w-full p-[2vh]'>
            <span className='font-bold'>{props.header}</span>{props.text && props.text}</span>
        }
  </div>
  )
}
