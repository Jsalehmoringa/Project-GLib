import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../GLib/Homepage';
import Loginpage from '../GLib/Loginpage';
import MyLibrary from '../GLib/MyLibrary';
import Dashboard from '../GLib/Dashboard';
import Logoutpage from '../GLib/Logoutpage';

function App() {
  
  const [results, setResults] = useState([])
  const [addbook, setAddBook] = useState([])

  function searchQuery(x) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${x}`, {
      method: "GET",
      Headers: {
        client_id: "1053999025061-fv82hf5vg46ahvc2uanc7egubi5abdk1.apps.googleusercontent.com",
        "Accept": "application/json",
        "Content-type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => setResults(data.items))
   
  }

  function createLib(items) {
    if(!addbook.find(item => item.id === items.id)) {
      setAddBook([...addbook, items])
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard createLib={createLib} props={results} searchQuery={searchQuery} />}></Route>
        <Route exact path="/login" element={<Loginpage/>}></Route>
        <Route exact path="/dashboard/logout" element={<Logoutpage/>}></Route>
        <Route exact path="/dashboard/mylibrary" element={<MyLibrary props={addbook}/>}></Route>
      </Routes>
    </div>

  )
}

export default App;
