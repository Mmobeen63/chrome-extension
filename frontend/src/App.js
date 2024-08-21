import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css'
/* global chrome */


function App() {
  const [selectedText, setSelectedText] = useState("");
  const Base_Url = process.env.REACT_APP_BASE_URL;
  console.log(Base_Url);
  const addText=async()=>{
    try {
    const response=  await axios.post(`${Base_Url}/api/texts`,{text: selectedText});
    alert('Text Added');
    setSelectedText('');
    } catch (error) {
      console.log(error);
    }
  }
  const removeText=()=>{
      chrome.storage.sync.remove("selectedText", () => {
        console.log("Chrome storage cleared on unmount");
        setSelectedText('')
      });
  }
  useEffect(() => {
    chrome.storage.sync.get(["selectedText"], (result) => {
      setSelectedText(result.selectedText || "");
    });
    return ()=>{
      chrome.storage.sync.remove('selectedText',()=>{
        console.log('Chrome storage cleared on unmount');
      })
    }
  }, []);

  return (
    <div className="container">
      <h1>Selected Text</h1>
      <p>{selectedText.length>0 ? selectedText : "Please Select a text"}</p>
      <div className="buttonContainer">
        <button disabled={!selectedText} onClick={removeText} className="cancelButton">Remove</button>
        <button disabled={!selectedText} onClick={addText} className="saveButton">Save</button>
      </div>
    </div>
  );
}

export default App;
