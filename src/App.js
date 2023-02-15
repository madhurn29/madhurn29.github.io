import { useEffect } from "react";
import "./App.css";

import Main from "./Components/Main";

function App() {
  
    window.scroll({
      top: 0,
      left: 0,
    });
  
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
