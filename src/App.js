import React , { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'; 
import gfm from 'remark-gfm';
import Button from '@material-ui/core/Button';
import './App.css';

const MyImage = props => {

  return (
    <img
      className={props.className}
      alt={props.alt}
      src={props.src}
    />
  );
};

function App() {

  const [markdown, setMarkdown] = useState('');
  const [clicked, setClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const renderers = {
    image: MyImage
  };

  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    if (clicked) {
      window.location.assign(`https://www.markdownguide.org/basic-syntax/`);
    }
  });

  return (
    <div className="markdown_container" data-theme={darkMode ? "dark" : "light"}>
      <div className="title">
        <h2>Markdown Editor</h2>
        <Button onClick={() => setClicked(true)} variant="contained" color="primary">Info</Button>
        <Button onClick={toggleDarkMode} variant="contained" >{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</Button>
        <Button onClick={() => setMarkdown('')} variant="contained" color="secondary">Clear</Button>
      </div>
      <textarea 
        placeholder="Enter the markdown text..."
        value={markdown}
        onChange = {e => setMarkdown(e.target.value)} 
      />
      <div className="markdown_preview">
        <ReactMarkdown 
          children={markdown} 
          remarkPlugins={[gfm]}
          renderers={renderers}
        />
      </div>
    </div>
  );
}

export default App;
