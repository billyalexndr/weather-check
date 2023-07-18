import { React, useEffect } from 'react';
import Card from "./Card";

import "./styles/Cards.css";

export default function Cards(props) {
  useEffect(() => {
    document.title = 'Weather Check';
  }, []);

  if (!props.cities) return <h2>There are No Cities Available !</h2>;
  return (
    <main className="container">
      <div className="d-flex flex-wrap cards-justify">
        {props.cities &&
          props.cities.map((e) => (
            <Card
              key={e.id}
              name={e.name}
              min={e.min}
              max={e.max}
              img={e.img}
              id={e.id}
              onClose={() => props.onClose(e.id)}
            />
          ))}
      </div>
    </main>
  );
}
