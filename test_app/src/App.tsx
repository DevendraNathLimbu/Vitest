import { useState } from 'react'
import './App.css'

function App({name="Subham"} : {name?: string}) {

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default App
