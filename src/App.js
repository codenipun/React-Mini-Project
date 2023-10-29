import React from 'react'
import ItemForm from './Components/ItemForm'
import ItemList from './Components/ItemList'
import './index.css'

const App = () => {
  return (
    <div className='main-container'>
      <h1>CREATE YOUR LIST !!</h1>
      <ItemForm/>
      <ItemList/>
    </div>
  )
}

export default App