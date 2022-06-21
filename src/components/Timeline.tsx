import React from "react";
import { Concert } from "./ConcertForm";
import { mdiCheckboxBlankCircle } from "@mdi/js";
import Icon from "@mdi/react";

const Timeline: React.FC<{ concerts: Concert[] }> = ({ concerts }) => {
  return (
    <div className="w-5 h-screen bg-red-500 flex-col">
      {concerts.map((concert, index) => {
        return <Icon path={mdiCheckboxBlankCircle} size={1} />;
      })}
    </div>
  );
};

export default Timeline;
