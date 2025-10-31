import { useState } from 'react';
//import Counter from "./components/Counter"
//import Todo from './components/Todo';
//import Pagination from './components/Pagination';
import Accordian from './components/Accordian';
import { items } from './components/accordian_data';

function App() {

  return (
    <>
      <h2>Welcome version 0.0</h2>
      <Accordian items={items}/>
    </>
  )
}

export default App
