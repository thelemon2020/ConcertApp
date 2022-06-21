import React, { useState } from "react";
import { ConcertCard } from "./ConcertCard";
import ConcertForm, { Concert } from "./ConcertForm";
import { mdiPlusCircle } from '@mdi/js'
import Icon from "@mdi/react";
import Timeline from "./Timeline";

export const Home: React.FC = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  return (
    <>
      <Modal title={'Add Concert'}>
        <ConcertForm
          addConcert={(concert) => setConcerts([...concerts, concert])}
        />
      </Modal>
      <div className="flex justify-center align-center columns-1">
       <Timeline concerts={concerts} />
      {/* {concerts.map((concert, index) => {
        return <ConcertCard concert={concert} key={index} />;
      })} */}
      </div>
    </>
  );
};

export const ModalContext = React.createContext({onClose : () => {}});

//do stuff with the above. You're welcome
const Modal: React.FC<{ children: JSX.Element, title: string }> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{onClose: () => setIsOpen(false)}}>
      <button onClick={() => setIsOpen(true)}>
        <Icon
          path={mdiPlusCircle}
          size={2}
          color={"red"}
        />
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div style={{ backgroundColor: "white" }}>
            <h3>{title}</h3>
            {children}
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
