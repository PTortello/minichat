import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBrbQbnUZmYNLtp4raiFoZZCiC3b1IbVhU",
  authDomain: "minichat-jvt.firebaseapp.com",
  projectId: "minichat-jvt",
  storageBucket: "minichat-jvt.appspot.com",
  messagingSenderId: "394826412413",
  appId: "1:394826412413:web:fb270f8d153a6945455c14"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">
          <div>minichat! 🦆</div>
          <div className="grid-right"><SignOut /></div>
        </div>
      </header>
      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button className="sign-in" onClick={ signInWithGoogle }>Entrar com Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={ () => auth.signOut() }>Sair</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('timestamp').limit(1000);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const dummy = useRef();

  const makeRoom = () => {
    const cutoff = new Date(Date.now() - 10 * 60 * 1000);
    messagesRef.get().then((res) => {
      res.forEach((msg) => {
        const {timestamp} = msg.data();
        if (timestamp?.toDate() < cutoff) {
          msg.ref.delete();
        }
      });
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (formValue.length > 0) {
      const { uid, photoURL, displayName } = auth.currentUser;
      const fetchTime = firebase.firestore.Timestamp.now().toDate().toString().slice(4, 24);
      const logtime = fetchTime.slice(12, 20) + ' ' + fetchTime.slice(0, 11);
      await messagesRef.doc(displayName + '-' + logtime).set({
        text: formValue,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName
      })
      setFormValue('');
    }
    makeRoom();
  };
  
  useEffect(() => {
    const scrollDown = () => {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    scrollDown();
  }, [messagesRef]);

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={ dummy }></div>
      </main>
      <form onSubmit={ sendMessage }>
        <input
          autoFocus
          maxLength="200"
          placeholder={"Envie uma mensagem"}
          value={ formValue }
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">💬</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${ messageClass }`}>
      <img src={ photoURL } alt="avatar" />
      <p>{ displayName }: { text }</p>
    </div>
  )
}

export default App;
