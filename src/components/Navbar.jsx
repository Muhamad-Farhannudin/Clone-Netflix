import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Navbar() {
  const {user, logOut} = UserAuth()
  // console.log(user.email)
  const navigate = useNavigate()


  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch(error) {
    console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 w-full z-[100] absolute'>
      <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
    {user?.email ? <div>
        <Link to='/account'>
        <button className='text-white pr-4'>Account</button>
        </Link>
        <button onClick={handleLogout} className='text-white bg-red-600 px-4 py-2 rounded cursor-pointer'>Logout</button>
      </div> : 
    <div>
        <Link to='/Login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/Signup'>
        <button className='text-white bg-red-600 px-4 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
    </div>}
    </div>
  )
}
