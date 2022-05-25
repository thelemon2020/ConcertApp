import {useState} from 'react';
import ActTag from './ActTag';

function ConcertForm(): JSX.Element {

  const [headliningActs, setHeadliningActs] = useState<Array<string>>([]);
  const [act, setAct] = useState<string>('');

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setHeadliningActs((prev) => [...prev, act]);
      setAct('');
    }

  }

  function removeAct(act: string) {
    setHeadliningActs(headliningActs.filter((existingAct)=> act !== existingAct ))
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}> 
      <div className="flex flex-col items-center border border-black border-radius-5 w-60">      
        <label className="" htmlFor="concertDate">Concert Date</label>
        <input className="w-32 border border-black" type="date" id="concertDate"></input>
      </div>

      <div className="flex flex-col items-center border border-black border-radius-5 w-60">      
        <label htmlFor="headliningActs">Headlining Acts</label>
        <input onChange={(e) => setAct(e.target.value)} value={act} className="w-32 text-black border border-black" type="text" id="headliningActs" onKeyDown={handleKeyDown}></input>
      <div>
        <div className="flex flex-row">
        {headliningActs.map((act, index) => {
          return (<ActTag key={index} removeAct={removeAct} act={act} />)
        })}
        </div>
      </div>
      </div>
 
    </form>
  )
}

export default ConcertForm;

