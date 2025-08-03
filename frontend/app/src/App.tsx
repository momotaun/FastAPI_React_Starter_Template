import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/hello')
      .then((res) => res.json())
      .then((data: { message: string }) => setMessage(data.message))
      .catch((err) => console.error('Error fetching: ', err));
  }, []);

  return (
    <>
      <h1>React + FastAPI</h1>
      <p>{message}</p>
    </>
  )
}

export default App
