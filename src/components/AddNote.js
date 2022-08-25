import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value); 
  };

  const handleSaveCLick = () => {
    
  }

  return (
    <div className="notes new">
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note_footer">
        <small>200 Remaining</small>
        <button className="save" >Add New Note</button>
      </div>
    </div>
  );
};

export default AddNote;
