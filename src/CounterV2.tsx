import React, { useState } from 'react';

const CounterV2 = () => {

    const [count, setCount] = useState(6)
    const [passo, setPasso] = useState(1)

    return (
        <div>
        <h4>
            Contandinho
        </h4>
        <h5>
            Number: <span>{count}</span>
        </h5>
        <div>
            <label htmlFor="value">Passo: </label>
            <input 
                id="value" 
                type="number" 
                value={passo}
                onChange={(e) => setPasso(Number(e.target.value))}
            ></input>
        </div>
        <br/>
        <div>
            <button type="button" onClick={() => setCount(count+passo)}>Add</button>
            <button type="button" onClick={() => setCount(count-passo)}>Sub</button>
        </div>
        </div>
    );
}

export default CounterV2;
