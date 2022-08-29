import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >=0) {
      setNoteText(e.target.value);
    }
     
  };

  const handleSaveCLick = () => {
    if(noteText.trim().length > 0){
      handleAddNote(noteText );
      setNoteText('');
    }
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
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveCLick }>Add New Note</button>
      </div>
    </div>
  );
};

export default AddNote;
