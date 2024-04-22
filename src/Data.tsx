import React, { useContext } from "react";
import { General } from "./GlobalState";
import { TodoType } from "./types/Plus"; 

const Data = () => {
  const context = useContext(General);

  if (!context) {
    return <div>Veri yükleniyor...</div>;
  }

  const { data } = context as { data: TodoType[] }; 

  return (
    <div className="App">
      {data.map((item: TodoType, index: number) => (
        <h1 key={index}>{item.title}</h1>
      ))}
    </div>
  );
};

export default Data;
