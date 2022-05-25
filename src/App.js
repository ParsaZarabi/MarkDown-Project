import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const Editor = ({ content, handleTextareaChange }) => <textarea value={content} autoFocus className='textarea' onChange={handleTextareaChange} />

const Previewer = ({ content }) => <div id='previewer'>{content}</div>

function App() {
  const [content, setContent] = useState("please type here!");

  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }
  
  return (
    <div className="App">
      <Editor content={content} handleTextareaChange={handleTextareaChange}  />
      <Previewer content={content} className='markdown' />
      
    </div>
  );
}

export default App;
