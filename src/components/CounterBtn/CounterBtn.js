import React, {useState} from 'react';

const CounterBtn = ( prop) => {

    const[count, setCount] = useState(0)

    let valor = count 

    prop = valor 

    return(

        <>
            <h2> Contador: </h2>
            <p>Valor: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count -1)}>Decrementar</button>
        </>
    )
}

export default CounterBtn