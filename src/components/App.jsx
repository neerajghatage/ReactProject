import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function AddNote(note) {
    setnotes((prev) => {
      return [...prev, note];
    });
  }
  function Dnote(ide) {
    setnotes((prev) => {
      return prev.filter((item, index) => {
        return index !== ide;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((items, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={items.title}
            content={items.content}
            onDelete={Dnote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
