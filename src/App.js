import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";

const App = () => {
  
  const [note, setNote] = useState([
    {
      id: nanoid(),
      text: "we start with come cookies and milk",
      date: "25/08/2022",
    },

    {
      id: nanoid(),
      text: "Dr strange is Mid",
      date: "21/08/2022",
    },

    {
      id: nanoid(),
      text: "Do you wanna build a snowman?",
      date: "22/08/2022",
    },

    
  ]);

  const addNote = (text) => {
    const date = new Date ();
    const newNote = {
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...note, newNote ];
    setNote(newNotes);
  }

  return (
    <div className="container">
      <NotesList note={note} handleAddNote={addNote} />
    </div>
  );
};

export default App;
