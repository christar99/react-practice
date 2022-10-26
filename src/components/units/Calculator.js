import React, { useState } from "react";


const Calculator = ({ number, addNumber, subsNumber }) => {
    const [userNumber, setUserNumber] = useState(0);
    const changeNumber = (e) => {
        e.preventDefault();
        setUserNumber(e.target.value);
    }

    return (
        <div>
            <h1>{number}</h1>
            <input onChange={changeNumber} value={userNumber}/>
            <button onClick={() => addNumber(userNumber)}>더하자</button>
            <button onClick={() => subsNumber(userNumber)}>빼자</button>
        </div>
    )
}

export default Calculator;