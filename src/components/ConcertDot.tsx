import Icon from '@mdi/react';
import { mdiCheckboxBlankCircle } from "@mdi/js";
import React from 'react'
import { Concert } from './ConcertForm';
import { ConcertCard } from './ConcertCard';

interface ConcertDotProps {
  concert: Concert,
  position: 'left' | 'right',
  isExpanded: boolean,
  setExpandedConcert: (id: string) => void
}


export const ConcertDot: React.FC<ConcertDotProps> = ({ concert, position, isExpanded, setExpandedConcert }) => {
  return (
    <div>
      <div role="button" onClick={() => setExpandedConcert(concert.id)} className="py-3" aria-label={`Show Concert Details ${concert.id}`}>
        <Icon path={mdiCheckboxBlankCircle} size={1} />
      </div>
      {isExpanded && <div 
      role="dialog" aria-label={`Concert info for ${concert.id}`} className="relative">
        <ConcertCard concert={concert} position={position}/>
      </div>}
    </div>
  );
}