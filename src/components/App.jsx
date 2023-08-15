import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function submitForm(note) {
    setnotes((prevnote) => {
      return [...prevnote, note];
    });
    console.log("Form submitted" + notes);
  }

  function deleteNote(id) {
    setnotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea submit={submitForm} />
      {notes.map((nt, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={nt.title}
            content={nt.content}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
