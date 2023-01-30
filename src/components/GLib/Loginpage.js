import React, { useEffect, useState }  from "react";
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const google = window.google;

function Loginpage() {

    const [user, setUser] =useState({});
    const navigate =useNavigate();

  function handleCallbackResponse(response) {
    var userObj = jwtDecode(response.credential)
    setUser(userObj)
    document.getElementById("signinDiv").hidden = true
    if (user) {
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "",
      SameSite: "None",
      callback: handleCallbackResponse
    })
    google.accounts.id.prompt()
  
    google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      { size: "large", width: 500, height: 500, theme: "filled_blue", text: "signup_with" },
  )   
})

    return (
        <div className="sign">
          <div id="signinDiv"> 

          </div>
      </div>
    )
}

export default Loginpage;