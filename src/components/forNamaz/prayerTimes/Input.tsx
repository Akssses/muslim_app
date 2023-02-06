import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'

type InputType = {
  inputRef: React.RefObject<HTMLInputElement>
}

export default function Input({ inputRef }: InputType) {
  const [searchInput, setSearchInput] = useState('')

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(() => e.target.value)

    if (inputRef.current !== null) {
      const firstLetter = inputRef.current.value[0]
      const inputLength = inputRef.current.value.length
      if (inputLength === 1) {
        if (
          65 <= firstLetter.charCodeAt(0) &&
          122 >= firstLetter.charCodeAt(0)
        ) {
          inputRef.current.classList.add('inputLTR')
        } else {
          inputRef.current.classList.remove('inputLTR')
        }
      }
    }
  }

  return (
    <div className="flex justify-center bg-white mx-auto w-[300px] items-center border focus-within:border-2 focus-within:border-primary-500 rounded-full overflow-hidden">
      <input
        ref={inputRef}
        onChange={handleInput}
        value={searchInput}
        placeholder='Поиск'
        type='text'
        name='search'
        className="block w-full bg-white px-5 py-3 text-sm outline-none border-none bg-transparent"
      />
      <div className="px-2 py-3">
        <FiSearch size={16} className="dark:text-white" />
      </div>
    </div>
  )
}
