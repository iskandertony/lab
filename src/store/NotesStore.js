import { makeAutoObservable } from "mobx";

import { collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";
import {db} from "../firebase-config";

class NotesStore {
    notes = [];

    constructor() {
        makeAutoObservable(this);
    }

    // Получение заметок из Firestore
    fetchNotes = async () => {
        const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        this.notes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    // Добавление новой заметки в Firestore
    addNote = async (note) => {
        await addDoc(collection(db, "notes"), {
            ...note,
            createdAt: new Date()
        });
        this.fetchNotes(); // Обновляем список заметок после добавления
    }
}

export const notesStore = new NotesStore();
