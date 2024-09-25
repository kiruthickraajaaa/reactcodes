import React, { useState } from 'react';


function ListKey(props) {
    return <li>{props.item}</li>;
}


function MyList() {
    
    const [inputValue, setInputValue] = useState('');
    
    const [listItems, setListItems] = useState([]);

    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

   
    const processInput = () => {
        
        const itemsArray = inputValue.split(',').map(item => item.trim());
        
        setListItems(itemsArray);
    };

    return (
        <div>
            <h2>Enter Items (comma separated):</h2>
            {/* Input field to get user input */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="e.g., Apple, Banana, Cherry"
            />
            {/* Button to trigger processing */}
            <button onClick={processInput}>Submit</button>

            {/* Displaying the output list */}
            <h3>Processed List:</h3>
            <ul>
                {listItems.map((item, index) => (
                    <ListKey key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default MyList;