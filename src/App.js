import React, { useState, useEffect } from 'react';
import './App.css';
import { Button,FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  console.log(username);

  useEffect(() => {
    setUsername(prompt('Masukkan Username'))
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Hello, {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Ketik Pesan...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} type='submit' variant="contained" color="primary" onClick={sendMessage}>Kirim Pesan</Button>
        </FormControl>
      </form>

      {/* displaying messages */}
      {
        messages.map(message => (
          <Message text={message}/>
        ))
      }
    </div>
  );
}

export default App;
