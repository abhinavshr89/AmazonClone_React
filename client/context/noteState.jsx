import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const [cart, setCart] = useState(['amrud']); // Initialize cart as an empty array
  const [searchText, setSearchText] = useState(''); // Initialize searchText as an empty string

  return (
    <NoteContext.Provider value={{ cart, setCart, searchText, setSearchText }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
