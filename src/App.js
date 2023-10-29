import React from 'react'
import ItemForm from './Components/ItemForm'
import ItemList from './Components/ItemList'

const App = () => {
  return (
    <div>
      <h1>Items List</h1>
      <ItemForm/>
      <ItemList/>
    </div>
  )
}

export default App