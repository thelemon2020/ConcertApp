import React, { useEffect, useMemo } from "react";
import { Concert } from "./ConcertForm";
import { mdiCheckboxBlankCircle } from "@mdi/js";
import Icon from "@mdi/react";
import moment from "moment";
import { ConcertCard } from "./ConcertCard";
import { ConcertDot } from "./ConcertDot";


const Timeline: React.FC<{ concerts: Concert[] }> = ({ concerts }) => {
  const sortedConcerts = useMemo(() => concerts.sort((a, b) =>  {
    // TODO: learn how to sort
    const aDate = moment(a.date, 'YYYY-MM-DD');
    const bDate = moment(b.date, 'YYYY-MM-DD');

    if (aDate.isBefore(bDate)) return -1
    return 1
  }), [concerts]);



  console.log('sortedConcerts', sortedConcerts)

  return (
    <div className="w-5 h-screen bg-red-500 flex flex-col items-center">
      {concerts.map((concert, index) => {
        return (
          <ConcertDot key={index} concert={concert} />
        );
      })}
    </div>
  );
};



export default Timeline;
