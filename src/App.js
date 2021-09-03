import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// firebase sdk
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
    <button onClick={ signInWithGoogle }>Sign in with Google</button>
  )
}

// function SignOut() {
//   return auth.currentUser && (
//     <button onClick={ () => auth.signOut() }>Sign Out</button>
//   )
// }

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const dummy = useRef();

  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const onMount = () => {
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    onMount();
  }, []);

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={ dummy }></div>
      </main>

      <form onSubmit={ sendMessage }>
        <input autoFocus placeholder={" < have fun!"} value={ formValue } onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${ messageClass }`}>
      <img src={ photoURL } alt="avatar" />
      <p>{ text }</p>
    </div>
  )
}

export default App;
