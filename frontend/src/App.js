import {useEffect} from "react";

function App() {

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <h1>React APP</h1>
  );
}

export default App;
