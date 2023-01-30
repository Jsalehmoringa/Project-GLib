import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../GLib/books.jpg"

function Registerpage() {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isLoggedIn,  setIsLoggedIn ] = useState(false)
    
    function addUser(e) {
      e.preventDefault() 

      setIsLoggedIn(true)
      if(isLoggedIn) {
        return (navigate("/dashboard"))
      }
    }

    return (
        <div className="sign-form" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <h1>Please fill the registration form to gain access.</h1>
        <form onSubmit={(e) => addUser(e)}>
            <label>Full Names: </label>
            <input className="input-text" required="required" placeholder="full names..." value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <label>Email: </label>
            <input className="input-text" required="required" placeholder="email..." value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
            <label>Password: </label>
            <input className="input-text" required="required" placeholder="password..." value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
            <input type="submit" placeholder="submit"></input>
        </form>
        </div>
    )

}

export default Registerpage