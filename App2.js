import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import "./App.css";

function App2() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App2;