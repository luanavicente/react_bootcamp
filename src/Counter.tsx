import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(4)

    return (
        <div>
        <h4>
            Contandinho
        </h4>
        <h5>
            Number: <span>{count}</span>
        </h5>
        <div>
            <button type="button" onClick={() => setCount(count+1)}>Add</button>
            <button type="button" onClick={() => setCount(count-1)}>Sub</button>
        </div>
        </div>
    );
}

export default Counter;

//de 0 a 10, passo=1
//acima, passo=2
//limitar -50 e 50
//atingindo limite, alert
//bônus: desabilitar botões


//FALTA ARRUMAR DISABLE DE BOTÕES