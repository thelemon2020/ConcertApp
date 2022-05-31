import {useState} from 'react';
import ActTag from './ActTag';
import { TagInput } from './TagInput';

function ConcertForm(): JSX.Element {

  const [headliningActs, setHeadliningActs] = useState<Array<string>>([]);
  const [supportingActs, setSupportingActs] = useState<Array<string>>([]);
  const [venue, setVenue] = useState<string>('');

  const handleKeyDown = (actId: string, value: string) => {
      if (actId === 'headliningActs') {
        setHeadliningActs((prev) => [...prev, value]);
      } else {
        setSupportingActs((prev) => [...prev, value]);
      }
  }

  function removeAct(act: string, actType: string) {
    actType === 'headlining'
    ? setHeadliningActs(headliningActs.filter((existingAct)=> act !== existingAct ))
    : setSupportingActs(supportingActs.filter((existingAct)=> act !== existingAct ))
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}> 
      <div className="flex flex-col items-center border border-black border-radius-5 w-60">      
        <label className="" htmlFor="concertDate">Concert Date</label>
        <input className="w-32 border border-black" type="date" id="concertDate"></input>
      </div>

      <div className="flex flex-col items-center border border-black border-radius-5 w-60">      
        <TagInput label="Headlining Acts" id="headliningActs" onKeyDown={handleKeyDown} />
        <TagInput label="Supporting Acts" id="supportingActs" onKeyDown={handleKeyDown} />
      <div>
        <div className="flex flex-row">
        {headliningActs.map((act, index) => {
          return (<ActTag key={index} removeAct={removeAct} act={act} actType='headlining' />)
        })}
        </div>
            <div className="flex flex-row">
        {supportingActs.map((act, index) => {
          return (<ActTag key={index} removeAct={removeAct} act={act} actType='supporting' />)
        })}
        </div>
        <div className="flex flex-col">
        <label htmlFor="venue">Venue</label>
        <input onChange={(e) => setVenue(e.target.value)} value={venue} className="w-32 text-black border border-black" type="text" id="venue"></input>
        </div>
      </div>
      </div>
 
    </form>
  )
}

export default ConcertForm;

