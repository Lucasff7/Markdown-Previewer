import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css'

function App() {
  const [text, setText] = useState(`# Welcome to my Markdown Previewer!

    ## This is a subheading (H2)
    
    [Visit Markdown Guide](https://www.markdownguide.org)
    
    Here is some \`inline code\`
    
    \`\`\`javascript
    // This is a code block
    function sayHello() {
      console.log("Hello, world!");
    }
    \`\`\`
    
    - List item 1
    - List item 2
    - List item 3
    
    > This is a blockquote. Markdown lets you format text easily.
    
    **This text is bold**
    
    ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
    `);
    
  const[editorFull, setEditorFull] = useState(false);
  const[previewFull, setPreviewFull] = useState(false);
  
  marked.setOptions({
    breaks: true,
  });

  const previewVisible = !editorFull;
  const editorVisible = !previewFull;
  

  const editorStyle = editorFull ? { width: '100vh', height: '100vh' } : { width: '100%', height: '100%' };
  const previewStyle = previewFull ? {width: '100ch', height:'100vh'} : { width: '100%', height: '100%' };


  return (
    <div className="app-container">
      {editorVisible && (
        <div className="editor-container">
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={editorStyle}
          />
          <button
            onClick={() => {
              setEditorFull(!editorFull);
              setPreviewFull(false); 
            }}
          >
            {editorFull ? 'Minimize Editor' : 'Maximize Editor'}
          </button>
        </div>
      )}

      {previewVisible && (
        <div className="preview-container">
          <h2>Preview</h2>
          <div
            id="preview"
            style={previewStyle}
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
          <button
            onClick={() => {
              setPreviewFull(!previewFull);
              setEditorFull(false); 
            }}
          >
            {previewFull ? 'Minimize Preview' : 'Maximize Preview'}
          </button>
        </div>
      )}
    </div>
  );
}


export default App;