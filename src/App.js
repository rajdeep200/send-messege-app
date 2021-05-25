import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Messege from "./components/messege/messege";
import db from "./firebase/firebase";
import firebase from "firebase/app";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import messegeU from "./assets/messegeU.png";

function App() {
  const [input, setInput] = useState("");
  const [messeges, setMesseges] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messeges")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMesseges(
          snapshot.docs.map((doc) => ({ id: doc.id, messege: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your Username:"));
  }, []);

  const sendMessege = (e) => {
    e.preventDefault();
    db.collection("messeges").add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src={messegeU} className="App-logo" alt="logo" />
      <h1>Welcome {username} To My Messenger</h1>
      <form className="app__form">
        <div className="form-container">
          <FormControl className="app__formControl">
            <Input
              className="app__input"
              placeholder="Enter a messege..."
              id="my-input"
              aria-describedby="my-helper-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <IconButton
              className="app__iconButton"
              type="submit"
              disabled={!input}
              variant="contained"
              color="primary"
              onClick={sendMessege}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </div>
      </form>
      <FlipMove>
        {messeges.map(({ id, messege }) => (
          <Messege key={id} username={username} messege={messege} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
