import { FirebaseError } from "firebase/app";
import { collection, Timestamp, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { db } from "./firebasedb.js";

// const db = require('./firebasedb');

// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room


export default class Chatroom {
    constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, 'chats');
    this.unsubscribe;
    }

    async addChat(message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: Timestamp.fromDate(now)
        }

        // save the chat document
        const response = await addDoc(this.chats, chat);
        return response;
    }

    getChats(callback) {

        const q = query(this.chats, where("room", "==", this.room), orderBy('created_at'));
        this.unsubscribe = onSnapshot(q, snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    callback(change.doc.data());
                }
            });
        });

    }

    updateUsername(username) {
        this.username = username;
        localStorage.setItem('username', this.username);
    }

    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if(this.unsubscribe) {
            this.unsubscribe();
        }
    }
}

