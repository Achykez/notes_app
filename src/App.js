import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

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
  return (
    <div className="container">
      <NotesList note={note} />
    </div>
  );
};

export default App;
