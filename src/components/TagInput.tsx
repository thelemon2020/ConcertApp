import React, { useState } from 'react';

type TagInputProps = {
  label: string,
  id: string, 
  onKeyDown: (id: string, value: string) => void
}


export const TagInput:React.FC<TagInputProps> = ({label, id, onKeyDown}) => {
  const [value, setValue] = useState('')

  const handleClick = (event: any) => {
    if (event.key === 'Enter') {
      // console.log('value', value);
      console.log('event value', event.target.value);
      onKeyDown(id, event.target.value);
      // event.target.value = ''
      setValue('');
    }
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input onChange={(e) => setValue(e.target.value)} value={value} className="w-32 text-black border border-black" type="text" id={id} onKeyDown={handleClick}></input>
      {/* Below omits the use of onChange and clears value by setting event.target.value = '' */}
      {/* <input  className="w-32 text-black border border-black" type="text" id={id} onKeyDown={handleClick}></input> */}
    </>
  )
}

