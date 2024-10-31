// import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import './App.css'
import {useState} from 'react'
import SelectedContact from './components/SelectedContact.jsx'

function App() {
const [selectedContactId, setSelectedContactId]= useState(null);
  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ):(
     <ContactList/>
    )}
    </>
  );
}

export default App