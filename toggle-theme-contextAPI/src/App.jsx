import Outer from "./Components/Outer";
import {ContextProvider} from "./Context/ContextProvider";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("light");

  function changeTheme() {
    document.querySelector("html").classList.toggle("dark");
    setTheme((currTheme) => {
      return currTheme==="light"?"dark":"light"
    });    
  }

  return (
    <>
      <ContextProvider value={{theme, changeTheme}}>
        <Outer />
      </ContextProvider>
    </>
  );  
}

export default App;
