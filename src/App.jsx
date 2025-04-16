import { useState } from 'react'
import { marked } from 'marked'

function App() {
  const [text, setText] = useState('# Olá, mundo!')

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Editor</h2>
      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '150px' }}
      />
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}
      />
    </div>
  )
}

export default App
