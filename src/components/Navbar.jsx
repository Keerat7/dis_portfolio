import React from 'react'

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <ul className="flex justify-around">
        <li><a href="/">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}
