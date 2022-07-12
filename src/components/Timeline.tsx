import React, { useState } from "react";
import { Concert } from "./ConcertForm";
import moment from "moment";
import { ConcertDot } from "./ConcertDot";

const Timeline: React.FC<{ concerts: Concert[] }> = ({ concerts }) => {
  const [expandedConcert, setExpandedConcert] = useState<string | null>(null);

  const sortFunction = (a: Concert, b: Concert) => {
    const aDate = moment(a.date, "YYYY-MM-DD");
    const bDate = moment(b.date, "YYYY-MM-DD");

    if (aDate.isBefore(bDate)) return -1;
    return 1;
  };

  return (
    <div className="w-5 h-screen bg-red-500 flex flex-col items-center">
      {concerts.sort(sortFunction).map((concert, index) => {
        return (
          <ConcertDot
            isExpanded={expandedConcert === concert.id}
            setExpandedConcert={setExpandedConcert}
            key={index}
            position={index % 2 === 0 ? "left" : "right"}
            concert={concert}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
