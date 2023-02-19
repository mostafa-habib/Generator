import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./App.css";

export default function Lang({ handleClick }) {
  //set language
  const [Language, setLanguage] = React.useState(1);

  //handle change of language change
  const handleChange = (event) => {
    setLanguage(event.target.value);
    // callback function for parent
    handleClick(event.target.value);
  };

  return (
    
  );
}
