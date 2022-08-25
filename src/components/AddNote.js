import React from 'react'

const AddNote = () => {
  return (
    <div className='notes new'>
        <textarea
            rows='8'
            cols='10'
            placeholder='type to add a note...'
        ></textarea>
        <div className='notes-footer'>
            <small>200 Remaining</small>
            <button className='save'>Add New Note</button>
        </div>
    </div>
  )
}

export default AddNote