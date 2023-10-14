import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div style={{display:'grid',placeItems:'center', height:'100vh',fontSize:'2.2vw'}}>
    <div className="error" style={{display:'grid',placeItems:'center'}}>
      <h1 >404 Page Not Found</h1>
      <button><Link style={{marginTop:'5vw'}} to='/' >Back To Home Page</Link>
      </button>
      </div>
    </div>
  )
}

export default Error
