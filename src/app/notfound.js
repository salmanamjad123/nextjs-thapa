import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested page</p>
        
        <Link href="/">
        <button className='bg-white text-black'>Go to Home Page</button>
        </Link>
    </div>
  )
}

export default NotFound