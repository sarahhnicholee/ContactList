// import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import './App.css'
import {useState} from 'react'
import ContactRow from './components/ContactRow.jsx'
import SelectedContact from './components/SelectedContact.jsx'

function App() {
const [selectedContactId, setSelectedContactId]= useState(null);
  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ):(
     <ContactList selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
    )}
  
    </>
  );
}

export default App