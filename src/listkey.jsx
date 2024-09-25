function Listkey(props){
    return(
        <li>{key}{items}</li>
    )
    function MyList(props){
        const listItem = props.myvalue.map((listvalue,index) =>
        <ListKey keys = {index} item = {listvalue} />
        );
    return (
        <div>
            <h2>Correct Key Usage Example</h2>
            <ul>
                {listItem}
            </ul>
        </div>
    );
    }
}
    export default Listkey