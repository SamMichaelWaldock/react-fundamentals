// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    const lowerCaseValue = value.toLowerCase();
    setUserName(lowerCaseValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(userName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName" type="text" value={userName} onChange={handleChange} />
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
