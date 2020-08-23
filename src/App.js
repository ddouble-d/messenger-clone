import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Input, IconButton  } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  console.log(username);

  //useState = variable di react
  //useEffect = run code in condition

  useEffect(() => {
    // jalankan sekali karena tidak ada kondisi
    setUsername(prompt('Masukkan Username'))
  }, [] )

  useEffect(() => {
    // jalankan sekali ketika aplikasi loaded
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(
        snapshot.docs.map( doc => (
            {
              id: doc.id, 
              message: doc.data()
            }
        ))
      )
    });
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setMessages([
      ...messages, { username: username, message: input }
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Hello, {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input 
            className="app__input"
            placeholder="Ketik Pesan..." 
            value={input} 
            onChange={event => setInput(event.target.value)} 
          />
          
          <IconButton
            className="app__iconButton"
            disabled={!input} 
            type='submit' 
            variant="contained" 
            color="primary" 
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* displaying messages */}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
