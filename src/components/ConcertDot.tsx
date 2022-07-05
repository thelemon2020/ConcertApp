import Icon from '@mdi/react';
import { mdiCheckboxBlankCircle } from "@mdi/js";
import React from 'react'
import { Concert } from './ConcertForm';
import { ConcertCard } from './ConcertCard';


export const ConcertDot: React.FC<{concert:Concert}> = ({ concert } : {concert:Concert}) => {

  const [visibility, setVisibility] = React.useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  }

  return (
    <>
      <div role="button" onClick={handleClick} className="py-3" aria-label={`Show Concert Details ${concert.id}`}>
        <Icon path={mdiCheckboxBlankCircle} size={1} />
      </div>
      <div role="dialog" aria-label={`Concert info for ${concert.id}`}>
        {visibility && <ConcertCard concert={concert} />}
      </div>
    </>
  );
}