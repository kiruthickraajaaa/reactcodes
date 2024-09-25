function FunctionProps(props) {
    return (
      <div>
     <h1>{props.name}</h1>
   {props.name.map(a =>
    <h1>{a}</h1>
   )}
      </div>
    );
  }
  
export default FunctionProps;