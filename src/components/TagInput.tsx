import React from 'react';

type TagInputProps = {
  label: string,
  id: string, 
  onKeyDown: (id: string, value: string) => void
}


export const TagInput:React.FC<TagInputProps> = ({label, id, onKeyDown}) => {
  const handleClick = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    
      console.log('event value', event.target.value);
      onKeyDown(id, event.target.value);
      event.target.value = ''
    }
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input  className="w-32 text-black border border-black" type="text" id={id} onKeyDown={handleClick}></input>
    </>
  )
}

