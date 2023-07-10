import { useState, useEffect } from 'react'
import RadioButtons from './RadioButtons'
interface SearchSectionProps{
    handleSearch:(word:string )=>void
}
const SearchSection:React.FC<SearchSectionProps> = ({handleSearch}) => {
  const [text, setText] = useState('')
//   const [searchType, setSearchType] = useState('adjective')

  const handleSubmit = (event: React.FormEvent) => {
    console.log(text)
    handleSearch(text)
    event.preventDefault()
  }

  return (
    <div className='group z-[100] md:absolute top-[0%] left-[50%] md:translate-x-[-50%]   text-white w-full lg:w-[25%]  md:w-[40%]  mx-auto py-2 lg:px-2 '>
      <form onSubmit={handleSubmit} className=''>
        <div className='flex flex-col w-full items-center'>
          <div className='text-xl font-extrabold flex justify-around lg:flex-col items-center '>
            <div className='p-1 pr-2 '>Type in</div>
            <input
              type='text'
              value={text}
              placeholder='your magnificent search'
              onChange={event => setText(event.target.value)}
              autoComplete='off'
              className=' p-1 bg-neutral-600/50  rounded-lg text-blue-200 italic'
            />
          </div>
          {/* <RadioButtons active={searchType} setActive={setSearchType} /> */}
          <div className='text-xl  border-white border-[2px] p-1 rounded-xl mt-2 opacity-0 group-hover:opacity-100 duration-300'>
            <button type='submit'>Search!</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchSection
