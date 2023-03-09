import React from 'react';
import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("component did mount")}, []); //tüm sayfa yüklendiğinde çalışıyor. Bir kere

    useEffect(() => {
        setInterval(() => {
            console.log("interval çalıştı")
            setCount(prev => prev + 1);
        },1000)}, []); 

    useEffect(() => {
        console.log("count state değişti")}, [count]); //count değiştiğinde çalışıyor.


    return(
        <div>
            <h2>Count: {count}</h2>
            {/* <button onClick={() => setCount(count+1)}>Click</button> */}
        </div>
    )
}

export default Counter;