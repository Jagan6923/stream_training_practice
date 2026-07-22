import React from 'react'

const Callback = ({ greet }) => {

    console.log("Callback rendered...");
    
    return (
        <div>
            <button onClick={greet}>Say Hello</button>
        </div>
    )
}

export default React.memo(Callback);
