import React, { useState, useEffect } from "react";
import "../css/Notes.css";
import { Link } from "react-router-dom";
import Footer from './Footer';
const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState("");
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote = { id: Date.now(), content: "" };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    setCurrentNote("");
  };

  const saveCurrentNote = () => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNote ? { ...note, content: currentNote } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    setCurrentNote("");
    setActiveNote(null);
  };

  const handleNoteClick = (id) => {
    const note = notes.find((note) => note.id === id);
    setActiveNote(id);
    setCurrentNote(note.content);
  };

  return (

    <>

    <div className="notes-container">
      <div className="sidebar">
        <button onClick={createNewNote} className="new-note-btn">
          + New Note
        </button>
        <ul className="notes-list">
          {notes.map((note) => (
            <li
              key={note.id}
              className={note.id === activeNote ? "active" : ""}
              onClick={() => handleNoteClick(note.id)}
            >
              {note.content.substring(0, 20) || "Untitled Note"}
            </li>
          ))}
        </ul>
      </div>
      <div className="editor">
        {activeNote ? (
          <>
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder="Write your notes here..."
            />
            <div className="editor-buttons">
              <button onClick={saveCurrentNote} className="save-btn">
                Save Note
              </button>
              <button onClick={() => deleteNote(activeNote)} className="delete-btn">
                Delete Note
              </button>
            </div>
          </>
        ) : (
          <p className="placeholder-text">Select or create a note to start editing</p>
        )}
      </div>
    </div>

        <Link
        to="/home"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#FF5733",
          color: "white",
          padding: "10px 15px",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
        >
        Back
        </Link>
        {/* <Footer/> */}
    </>
  );
};


export default Notes;
