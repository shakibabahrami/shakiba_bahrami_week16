import Input from "./main.jsx";
import { useState } from "react";
import cities from "./cities.json";

function App() {
  const [hint, setHint] = useState("Enter a city");

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(cities);
    
   //  setHint(event.target.value);
   
   
  };

  return <Input handleChange={handleChange} hint={hint} setHint={setHint} />;
}

export default App;
