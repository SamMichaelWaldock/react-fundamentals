// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements['userName'];
    onSubmitUsername(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
