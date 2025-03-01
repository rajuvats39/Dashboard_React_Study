import React from 'react'

export default function ReusableButton({ text, onClick }) {
  return (
    <button className='btn btn-primary col-sm-1 mt-2' onClick={onClick}>{text}</button>
  )
}
