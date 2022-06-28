import { randomUUID } from "crypto";
import React, { useContext, useState } from "react";
import { ModalContext } from "./Home";
import { TagDisplay } from "./TagDisplay";
import { TagInput } from "./TagInput";

export type Concert = {
  headliningActs: Array<string>;
  supportingActs: Array<string>;
  venue: string;
  date: string;
  id: string
};

interface ConcertFormProps {
  addConcert: (newConcert: Concert) => void;
}

const ConcertForm: React.FC<ConcertFormProps> = ({addConcert}) => {
  const [concert, setConcert] = useState<Concert>({
    headliningActs: [],
    supportingActs: [],
    venue: "",
    date: "",
    id: randomUUID(),
  });

  const [venue, setVenue] = useState<string>("");

  const {onClose} = useContext(ModalContext);

  const handleKeyDown = (actId: string, value: string) => {
    if (actId === "headliningActs") {
      setConcert({
        ...concert,
        headliningActs: [...concert.headliningActs, value],
      });
    } else {
      setConcert({
        ...concert,
        supportingActs: [...concert.supportingActs, value],
      });
    }
  };

  function removeAct(act: string, actType: string) {
    actType === "headlining"
      ? setConcert({
          ...concert,
          headliningActs: concert.headliningActs.filter(
            (existingAct) => act !== existingAct
          ),
        })
      : setConcert({
          ...concert,
          supportingActs: concert.supportingActs.filter(
            (existingAct) => act !== existingAct
          ),
        });
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    addConcert(concert);
    onClose();
  };

  return (
    <div>
      <div className="flex flex-col items-center border border-black border-radius-5 w-60">
        <label className="" htmlFor="concertDate">
          Concert Date
        </label>
        <input
          className="w-32 border border-black"
          type="date"
          id="concertDate"
          onChange={(event) => {setConcert({ ...concert, date: event.target.value })}}
        ></input>
      </div>

      <div className="flex flex-col items-center border border-black border-radius-5 w-60">
        <TagInput
          label="Headlining Acts"
          id="headliningActs"
          onKeyDown={handleKeyDown}
        />
        <TagDisplay
          labels={concert.headliningActs}
          removeAct={removeAct}
          actType="headlining"
        />
        <TagInput
          label="Supporting Acts"
          id="supportingActs"
          onKeyDown={handleKeyDown}
        />
        <TagDisplay
          labels={concert.supportingActs}
          removeAct={removeAct}
          actType="supporting"
        />
        <div className="flex flex-col">
          <label htmlFor="venue">Venue</label>
          <input
            onChange={(event) => {setConcert({ ...concert, venue: event.target.value })}}
            value={concert.venue}
            className="w-32 text-black border border-black"
            type="text"
            id="venue"
          ></input>
        </div>
        <button className="btn btn-blue" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ConcertForm;
