import axios from "axios";
import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    axios.get(`http://localhost:8082/api/video/`).then((res) => {
      console.log(res)
    })
  })
  return (
    <div className="App">
      date
    </div>
  );
}

export default App;
