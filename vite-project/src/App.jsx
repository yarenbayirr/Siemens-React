
// import './App.css'
// import { useState } from 'react'  //state tanımlarında olması gereken. Elimizde değişken varsa ve değişecekse.

// function App() {
   
//   const [count, setCount] = useState(0);  //use state kendimiz tanımladık. ilk parametresi ilk değer. Mesela burada sıfır verdik. Başlangıç değeri 0 demektir. Bu değer herhangi bir anda değişebilir. Standartlara göre birinci parametre count ise diğeri set ile başlar 
//   const handeClick = () => setCount(count + 1);  //her defasında bir arttırmak
//   return (
//     <div className="App"><h2>Count: {count}</h2>
//     <button onClick={handeClick}>Increase</button>
//     </div>
//   )
// }

// export default App

import './App.css'
import { useState } from 'react'  

function App() {
   
  const [users, setUsers] = useState([{id: 1, name:'Mete'}]); 
  const handeClick = () => {
    // setUsers([...users,{id: Math.floor(Math.random()*100), name:'Selen'}])  //spread operatörü ile öncelikle elimizde arrayi yazdıralım sonra diğer eklensin. Sürekli aynı id ile üretileceği için hata veriyor. ID için random sayı üretilsin 0 ile 100 arasında

    //2.yol
    setUsers((prev) => [...prev, {id: Math.floor(Math.random()*100), name:'Selen'},]) //böyle listenin sonuna ekler. ...prev ile {} süslü parantezin yerini değişsek başa ekler.
  }
  
  return (
    <div className="App">
      <h2>Users: {users.length}</h2>
    {users.map((user) => (
       <div key={user.id}>{user.name}</div>
    ))}
     <button onClick={handeClick}>Increase</button>
    </div>
  )
}

export default App
