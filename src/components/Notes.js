import React from "react";
import {MdDeleteForever} from 'react-icons/md'

const Notes = ({id, text,date}) => {
  
  return (
    <div className="notes">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};

export default Notes;
