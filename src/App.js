import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import Search from "./Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false);

  

  useEffect(()=> {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes_app-data')
    );

    if (savedNotes) {
      setNote(savedNotes)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(
      'notes_app-data', 
      JSON.stringify(note))
  },[note]);

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

  const deleteNote = (id) => {
     const newNotes = note.filter((note)=>note.id !== id);
     setNote(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList 
        note={note.filter((note)=> 
          note.text.toLowerCase().includes(searchText)
          )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} 
      />
    </div>
    </div>
  );
};

export default App;
