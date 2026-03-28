'use client'

import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [response, setResponse] = useState('')

  const handleUpload = async () => {
    if (!file) return
    // API integration to be implemented
    setResponse('PDF processing functionality to be integrated')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Nexus Ultra AI PDF Toolkit</h1>
      <p>Upload and process PDFs with AI-powered tools</p>
      <div style={{ marginTop: '2rem' }}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={handleUpload}
          style={{
            marginLeft: '1rem',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
          }}
        >
          Process PDF
        </button>
      </div>
      {response && (
        <p style={{ marginTop: '1rem', color: '#666' }}>{response}</p>
      )}
    </div>
  )
}
