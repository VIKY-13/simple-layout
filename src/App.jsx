import GenerateContainer from "./components/generate_container";

function App(props) {
  const containerClass = ["container1", "container2", "container3"]
  let j = 0;
  let divItems = [];
  for (let i = 0; i < props.containers.length; i++) {
    divItems.push(<GenerateContainer containerObj={props.containers[i]} containerClass={containerClass[j]} />)
    j++
    if (j == containerClass.length) {
      j = 0
    }
  }

  return (
    <div>
      <h1>What's Included In All Access</h1>
      <div className="mainContainer">
        {divItems}
      </div>
    </div>
  );
}

export default App;