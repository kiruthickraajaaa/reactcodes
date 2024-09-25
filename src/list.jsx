import React from 'react';
function Listpoint(props)
{
    // const mydata=[100,200,300,400]
    const mydata=props.myvalues;
    const rl=mydata.map((listvalues,) =>{
        console.log("done")
        console.log(listvalues)
        return<li>{listvalues}</li>
    });
    return <div className="container">
        <ul>{rl}</ul>
    </div> 
}
export default Listpoint