import react, {useState} from 'react';
import { useHistory } from "react-router-dom";

function SignUp(props) {


    // react code
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [passwordConfirm, setPasswordConfirm] = useState("")
   
   const history = useHistory();


   const handleName = (e) => {
    setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const handleSubmit = async e => {

        e.preventDefault()

        if (password === passwordConfirm) {
            const user = { 
                name: name, 
                password: password,
            };
            console.log(user)
            const response = await fetch("https://localhost:5000/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            const loggedInUser = await response.json()
            localStorage.setItem('user', JSON.stringify(loggedInUser))
            history.push("/packs-page"); 
        } else {
            alert("Passwords do not match")
        }

        

    };


    return (
        <div style={{marginTop: "30%"}}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{fontSize: "1.25rem", margin: "10px", height: "100%"}}>Sign Up</div>
                <label>Username:</label>
                <input onChange={(e) => handleName(e)} value={name} label="Name" />
                <label>Password:</label>
                <input onChange={(e) => handlePassword(e)} value={password} type="password" label="Password" />
                <label>Password Confirmation:</label>
                <input onChange={(e) => handlePasswordConfirm(e)} value={passwordConfirm} type="password"  />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={props.showSignUp} style={{textTransform: 'none', marginTop: "5px", fontWeight: "150"}} id="signupbutton">Back To Login</button>
        </div>
    );
  }
  
  export default SignUp;