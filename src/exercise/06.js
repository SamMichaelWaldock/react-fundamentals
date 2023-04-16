// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const userNameRef = React.useRef();
  const [error, setError] = React.useState();

  const handleChange = (event) => {
    const { value } = event.target;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = userNameRef.current
    onSubmitUsername(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input ref={userNameRef} id="userName" type="text" onChange={handleChange} />
      </div>
      {error ? <p role="alert" style={{ color: "red" }}>{error}</p> : null}
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
