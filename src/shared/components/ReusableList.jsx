import React from 'react'

export default function ReusableList({ items }) {
  return (
    <ul className='ms-3 mt-2'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
