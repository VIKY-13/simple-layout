import { useState, useEffect } from "react";
import GenerateContainer from "./components/generate_container";
import axios from "axios";

function App() {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/layout")
      .then((response) => {
        setContainers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const containerClass = ["container1", "container2", "container3"];

  const divItems = containers.map((item, i) => {
    return (
      <GenerateContainer
        containerObj={item}
        containerClass={containerClass[i % containerClass.length]}
      />
    );
  });

  return (
    <div>
      <h1>What's Included In All Access</h1>
      <div className="mainContainer">{divItems}</div>
    </div>
  );
}

export default App;
