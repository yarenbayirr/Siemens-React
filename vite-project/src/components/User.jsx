import { useState } from "react";

function User(){
    const [selectedUserId,setSelectedUserId] = useState(null);
    const [user,setUser] = useState([
        {id: 1, name:'Can', surname: 'Çetin'},
        {id: 2, name:'Ersin', surname: 'Deniz'}
        ]);

    // const handeClick = () => {
    //     setUser({...user, name: "Samet"}) //içindeki her şeyi getir.
    // }
    const handeClick = () => {
        if(!selectedUserId){}
    }
    return(
        <div>
            <h2>User</h2>
            {/* direkt objeyi ekrana basmaz */}
            {/* {user}  */}
            <div style={{fontSize:11}}><pre>{JSON.stringify(user, null, 4)}</pre></div>


            <div style={{marginTop: 40}}>
            <select onChange={(e)=> setSelectedUserId(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            </div>
            <button onClick={handleClick}>Change the name</button>

        </div>
    )
}