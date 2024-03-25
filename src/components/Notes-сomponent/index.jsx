import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {notesStore} from "../../store/NotesStore";

const NotesComponent = observer(() => {
    useEffect(() => {
        notesStore.fetchNotes();
    }, []);

    return (
        <div>
            {notesStore.notes.map(note => (
                <div key={note.id}>{note.content}</div>
            ))}
            <button onClick={() => notesStore.addNote({ content: "Новая заметка" })}>
                Добавить заметку
            </button>
        </div>
    );
});

export default NotesComponent;
