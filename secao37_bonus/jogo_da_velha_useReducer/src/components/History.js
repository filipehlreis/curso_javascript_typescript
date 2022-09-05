import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";


export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);


  function handleClick(index) {
    dispatch({ type: 'UPDATE_HISTORY', payload: [history, index] })
  }

  return (
    <div>
      {history.map((data, index) => {
        return (
          <div className="history" key={index}>
            <button type="button" onClick={() => handleClick(index)}>Voltar para a jogada {index}</button>
          </div>
        );
      })}
    </div>
  );
}
