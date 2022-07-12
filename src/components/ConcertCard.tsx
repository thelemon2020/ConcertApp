import { Concert } from "./ConcertForm"

interface ConcertCardProps {
  concert: Concert;
  position: "left" | "right";
}

export const ConcertCard: React.FC<ConcertCardProps> = ({concert, position}) => {
  return (
    <div data-testid='concert-card' className={`text-center shadow-lg w-80 mx-auto my-auto absolute ${position}-[100%] -mt-[200%]`}>

      <h2>Concert Date</h2>
      <p>{concert.date}</p>
      <h3>Convert Venue</h3>
      <p>{concert.venue}</p>
      <ul>
        {concert.headliningActs.map((act, index) => {return <li key={`headlining_${index}`}>{act}</li>})}
      </ul>
      <ul>
        {concert.supportingActs.map((act, index) => {return <li key={`supporting_${index}`}>{act}</li>})}
      </ul>
    </div>
  )
}