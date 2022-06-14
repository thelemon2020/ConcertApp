import React, { useState } from "react";
import { ConcertCard } from "./ConcertCard";
import ConcertForm, { Concert } from "./ConcertForm";

export const Home: React.FC = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  return (
    <>
      <Modal>
        <ConcertForm
          addConcert={(concert) => setConcerts([...concerts, concert])}
        />
      </Modal>
      {concerts.map((concert, index) => {
        return <ConcertCard concert={concert} key={index} />;
      })}
    </>
  );
};

const ModalContext = React.createContext({onClose : () => {}});
//do stuff with the above. You're welcome
const Modal: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
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
            {children}
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
