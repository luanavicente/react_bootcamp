import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(4)
    const [addDisabled, setAddDisabled] = useState(false)
    const [subDisabled, setSubDisabled] = useState(false)

    function add(){
        setSubDisabled(false)
        if(count >= -10 && count < 10){
            setCount(count+1)
            return
        }
        if((count >= 10 && count < 49) || (count < 10 && count >= -50)){
            const newCount = count+2
            if(newCount === 50){
                alert('oi')
                setAddDisabled(true)
            }
            setCount(newCount)
            return
        }
    }

    function sub(){
        setAddDisabled(false)
        if(count > -10 && count <= 10){
            setCount(count-1)
            return
        }
        if((count >= 10 && count <= 50) || (count <= -10 && count >= -49)){
            const newCount = count-2
            if(newCount === -50){
                alert('oiaaa')
                setSubDisabled(true)
            }
            setCount(newCount)
            return
        }
    }

    return (
        <div>
        <h4>
            Contandinho
        </h4>
        <h5>
            Number: <span>{count}</span>
        </h5>
        <div>
            <button type="button" disabled={addDisabled} onClick={add}>Add</button>
            <button type="button" disabled={subDisabled} onClick={sub}>Sub</button>
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
