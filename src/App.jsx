import React from "react";
import data from "./data";
import Card from "./components/cards";
import Navbar from "./components/navbar";

export default function App() {
    const cards = data.map((element) => {
      return <Card key={element.id} element={element} />;
    });
  return (
    <div>
      <Navbar />
      <section>{cards}</section>
    </div>
  );
}
