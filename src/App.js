import React from 'react';
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList /> 
    </div>
  );
}

export default App;
