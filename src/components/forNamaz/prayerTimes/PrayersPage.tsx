import { useRef, useState } from 'react'


import { motion } from 'framer-motion'

import axios from 'axios'
import Input from './Input'

import PrayerTimes from './PrayerTimes'
import LocaleClock from './LocaleClock'
import CountryClock from './CountryClock'


const ALADHAN_API_BASE_URL = 'https://api.aladhan.com/v1/timingsByCity'
const BIGDATACLOUD_BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

type DateType = {
  gregorian: string
  hijri: {
    day: string
    month: { number: number }
    weekday: { ru: string }
    year: string
  }
}

type LocationNameType = {
  city: string
  country: string
  timezone: string
}

type PrayerTimesType = {
  Fajr: string
  Sunrise: string
  Dhuhr: string
  Asr: string
  Maghrib: string
  Isha: string
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesType | null>(null)
  const [date, setDate] = useState<DateType | null>(null)
  const [locationName, setLocationName] = useState<LocationNameType | null>(
    null
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (inputRef.current !== null) {
      if (inputRef.current.value === '') return
      setIsLoading(true)
      searchForLocation(inputRef.current.value)
    }
  }

  async function searchForLocation(city: string) {
    axios
      .get(ALADHAN_API_BASE_URL, {
        params: {
          city,
          country: city,
        },
      })
      .then((response) => {
        const data = response.data.data

        const { day, month, weekday, year } = data.date.hijri
        setDate({
          gregorian: data.date.readable,
          hijri: { day, month: month.number, weekday, year },
        })

        const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = data.timings
        setPrayerTimes({ Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha })

        const { latitude, longitude, timezone } = data.meta
        searchLocationName(latitude, longitude, timezone)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
        setIsError(true)

      })
  }

  async function searchLocationName(
    latitude: number,
    longitude: number,
    timezone: string
  ) {
    axios
      .get(BIGDATACLOUD_BASE_URL, {
        params: {
          latitude,
          longitude,
          localityLanguage: 'ru',
        },
      })
      .then((response) => {
        const { city, countryName } = response.data
        setLocationName({ city, country: countryName, timezone })
      })
      .catch((err) => {
        console.error(err)
        if (inputRef.current !== null) {
          setLocationName({
            city: inputRef.current.value,
            country: '',
            timezone,
          })
        }
      })
      .finally(() => {
        setIsLoading(false)
        setIsError(false)
      })
  }

  const hijriDate = `(${date?.hijri.year}/${date?.hijri.month}/${date?.hijri.day})`
  const gregorianDate = date?.gregorian

  return (
    <motion.div className=' pt-5 px-5 sm:px-10'>
      <header>
        <h1 className='text-center text-3xl mb-10 font-bold'>Время намаза</h1>
        <nav>
          <ul className='flex flex-col gap-5 py-2 '>
            <li>
              <LocaleClock />
            </li>
            <li>
              <form onSubmit={handleSubmit}>
              <Input inputRef={inputRef} />
              </form>
            </li>
          </ul>
        </nav>
      </header>
      {isLoading ? (
        <div className='flex justify-center mt-10'>
            Loading...
        </div>
      ) : isError ? (
        <h1 className='p-3 mt-10 font-semibold text-3xl text-center'>Введите название города</h1>
      ) : (
        <main className='flex flex-col gap-5 justify-center items-center my-10'>
          {locationName === null ? (
            <h1 className='p-3 font-semibold text-3xl text-center'>
              Введите название города в поле поиска
            </h1>
          ) : (
            <>
              <h1 className='py-2 max-w-sm px-10 rounded-full bg-primary-900 text-primary-800 text-3xl '>
                {locationName.city} {',' + locationName.country}
              </h1>

              <div className='flex flex-col items-center '>
                <p className='text-5xl'>{date?.hijri.weekday.ru}</p>
                <div className='flex gap-5 mt-3'>
                  <p className='font-bold text-lg'>{gregorianDate}</p>
                </div>
              </div>

              <PrayerTimes prayerTimes={prayerTimes as PrayerTimesType} />
            </>
          )}
        </main>
      )}
    </motion.div>
  )
}

export default App
