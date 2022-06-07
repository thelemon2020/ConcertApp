import React from 'react';
import ActTag from './ActTag';

type TagProps = {
  labels: string[],
  removeAct: (act: string, actType: string) => void,
  actType: string
}

export const TagDisplay:React.FC<TagProps> = ({labels, removeAct, actType}) => {
  return (
   <div className="flex flex-row">
        {labels.map((act, index) => {
            return (<ActTag key={index} removeAct={removeAct} act={act} actType={actType} />)
        })}
        </div>
  )
}
