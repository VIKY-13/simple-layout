function GenerateList(props){
    const listItems = props.listItems.map((list) => {
        return <li>{list}</li>
    });

    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default GenerateList;