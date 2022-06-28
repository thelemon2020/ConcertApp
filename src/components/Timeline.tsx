import React, { useEffect, useMemo } from "react";
import { Concert } from "./ConcertForm";
import { mdiCheckboxBlankCircle } from "@mdi/js";
import Icon from "@mdi/react";

const Timeline: React.FC<{ concerts: Concert[] }> = ({ concerts }) => {
  const sortedConcerts = useMemo(() => concerts.sort((a, b) =>  {
    // TODO: learn how to sort
    if (a.date > b.date) return 0
    return 1
  }), [concerts]);

  console.log('sortedConcerts', sortedConcerts)

  return (
    <div className="w-5 h-screen bg-red-500 flex flex-col items-center">
      {concerts.map((concert, index) => {
        return (
        <div className="py-3" data-testId={`icon-${concert.id}`}>
            <Icon path={mdiCheckboxBlankCircle} size={1} />
          </div>
          );
      })}
    </div>
  );
};

export default Timeline;
