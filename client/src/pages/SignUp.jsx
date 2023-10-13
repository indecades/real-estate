import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function SignUp() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() // initializing useNavigate
//targets input change and keeps it (stores in formData)
  const handleChange = (e) => {
setFormData(
  {
  ...formData, 
  [e.target.id]: e.target.value
}
)

  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      setLoading(true)
    
      const res = await fetch('/api/auth/signup', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      }
      ) 
      const data = await res.json()
      if (data.success === false) {
        setLoading(false)
        setError(data.message)
        navigate('/sign-in')
        return
      }
      setLoading(false) // loading completed
      setError(null) // no error occured
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
   
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3 text-center front-semibold my-7'>Sign up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        type='text' 
        placeholder='username'
        className='border p-3 rounded-lg '
        id='username'
        onChange={handleChange}
        />
        <input 
        type='email' 
        placeholder='email'
        className='border p-3 rounded-lg '
        id='email'
        onChange={handleChange}
        />
        <input 
        type='password' 
        placeholder='password'
        className='border p-3 rounded-lg '
        id='password'
        onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:oppacity-95 disabled:opacity-80'>
          {loading ? 'Loading...': 'Sign Up'}
          </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>
          Have an account?
          <Link to={'/sign-in'}>
            <span className='text-blue-700'> Sign in</span>
          </Link>
        </p>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
