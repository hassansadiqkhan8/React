import { useState } from 'react'
import UserGreeting from './components/UserGreeting'


function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false} username={"Hassan Sadiq Khan"} />
    </>
  )
}

export default App
