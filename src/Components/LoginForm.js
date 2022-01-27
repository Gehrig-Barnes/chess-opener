
import React, {useState, useEffect} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom'



function LoginForm({users}){
//create states for name and passwords || one state as a JS object

const [userName, setUserName] = useState(localStorage.getItem("userName") ||"");
const [password, setPassword] = useState(localStorage.getItem("password") || "");
const [status, setStatus] = useState("pending")
const history = useHistory();

localStorage.setItem('userName', userName);
localStorage.setItem('password', password);


function manageUserName(e){
    const value = e.target.value;
    setUserName(value);
}

function managePassword(e){
    const value = e.target.value;
    setPassword(value);
}

function manageLogin(e){
    e.preventDefault();
    
    users.map((user) => {
        // console.log(user.name)
        // console.log(user.password)
        if (user.name === userName && user.password === password){
           history.push("/home") 
        } else { 
            setStatus("rejected")
        }
    })
}

function manageRejection(){
    return (
    <h2>User Not Found</h2>
    )

}  
    

    return (
    <div>
        
        
        <form onSubmit={manageLogin}>

            <label>
                <input onChange={manageUserName} type="text" placeholder='name' value={userName}></input>
                <input onChange={managePassword} type="text" placeholder="password" value={password}></input>
                <button type="submit">Log In</button>
            </label>
        </form>
        

        { status === "rejected" && manageRejection()}
        
    </div>
    )
}

export default LoginForm;