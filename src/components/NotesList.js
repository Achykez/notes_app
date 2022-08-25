import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const NotesList = ({ note, handleAddNote}) => {
  return (
    <div className="notes_list">
      {note.map((note) => (
        <Notes 
            id={note.id} 
            text={note.text} 
            date={note.date}
         />
      ))}

      <AddNote handleAddNote={handleAddNote}/>
    </div>
  );
};

export default NotesList;
