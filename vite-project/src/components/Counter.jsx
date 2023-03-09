import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handeClick = () => {
        // setCount(count + 1);
        // setCount(count + 1); //burada sonucun iki olmasını bekliyoruz ancak sonuç bir. O yüzden böyle kullanmıyoruz. 

        setCount((prev) => prev + 1); //prev öylesine isim başka da kullansak olurdu.
        setCount((prev) => prev + 1); //bir öncekini baz al dediğimiz için 2 yi görebiliriz artık. 
        
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handeClick}>Arttır</button>
        </div>
    )
}