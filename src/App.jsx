import Input from "./main.jsx";
import { useState } from "react";
import cities from "./cities.json";
import { use } from "react";

function App() {
  const [hint, setHint] = useState("Enter a city");
  let temp = [];
  const handleChange = (event) => {
    console.log(event.target.value);
    if (!event.target.value){ 
      setHint("Enter a city")
      return; }
    temp = cities.filter((city) => city.startsWith(event.target.value));
    setHint(temp[0]);
  };

  return <Input handleChange={handleChange} hint={hint} setHint={setHint} />;
}

export default App;
