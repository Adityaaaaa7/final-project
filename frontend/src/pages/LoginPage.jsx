import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    if (email.includes('@')) navigate('/upload')
    else alert('Enter a valid Gmail')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center text-white">
      <motion.h1 className="text-4xl font-bold mb-8" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Welcome to Decentralized CDN
      </motion.h1>
      <motion.div className="bg-white p-6 rounded-xl shadow-2xl w-80" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        <input
          type="email"
          className="w-full p-3 text-black rounded-lg border border-gray-300 mb-4"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </motion.div>
    </div>
  )
}
