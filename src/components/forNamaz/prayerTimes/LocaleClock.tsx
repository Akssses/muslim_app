import { useState, useEffect } from 'react'

const localeTimeString = new Date().toLocaleTimeString()
export default function LocaleClock() {
  const [currentTime, setCurrentTime] = useState(localeTimeString)

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().getTime()
      const updatedTime = new Date(timestamp)
      setCurrentTime(updatedTime.toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-col items-center justify-center gap-1 font-bold p-3 border border-primary-900 shadow-lg rounded-full max-w-sm mx-auto text-center'>
      <span className='text-sm'>Текущее время</span>
      <span className='text-3xl'>{currentTime}</span>
    </div>
  )
}
