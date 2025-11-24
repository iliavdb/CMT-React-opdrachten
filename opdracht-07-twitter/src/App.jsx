import { useState } from 'react';
import './App.css'
import CreateMessage  from './components/createmessage'
import MessageList from './components/MessageList'

function App() {
  const [textInput, setTextInput] = useState('');
    const [message, setMessage] = useState([]);
let name = 'ilia';

  return (
    <>
      <CreateMessage message={message} setMessage={setMessage} textInput={textInput} setTextInput={setTextInput}/>
      <MessageList name={name} message={message}/>
    </>
  )
}

export default App
