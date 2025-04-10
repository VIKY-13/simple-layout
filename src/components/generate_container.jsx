import GenerateList from "./generate_list"

function GenerateContainer(props){
    return(
        <div className={`generalContainer ${props.containerClass}`}>
        <h2>{props.containerObj.heading}</h2>
        <GenerateList listItems={props.containerObj.list} />
      </div>
    )
}

export default GenerateContainer;