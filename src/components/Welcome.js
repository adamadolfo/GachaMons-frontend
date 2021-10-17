import react, {useState} from 'react';
import SignUp from './SignUp'

import { useHistory } from "react-router-dom";





function Welcome() {


    // react code
   const [name, setName] = useState("")
   const [password, setPassword] = useState("")
   const [signup, setSignup] = useState(false)

   const history = useHistory();


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async e => {
    
        e.preventDefault()
        const user = { 
            name: name, 
            password: password
        };

        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const loggedInUser = await response.json()
        localStorage.setItem('user', JSON.stringify(loggedInUser))
        history.push("/packs-page");

    };


    const showSignUp = () => {
        setSignup(!signup)
    }


    return (
        <div className="welcome">
            {
                !signup 
                ?
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>Sign In</div>
                        <input onChange={(e) => handleName(e)} value={name} />
                        <input onChange={(e) => handlePassword(e)} value={password} type="password"  />
                        <button type="submit" >Sign In</button>
                    </form>
                    <button onClick={showSignUp} >Don't have an account? Sign Up</button>               
                </div>    
                :
                <SignUp showSignUp={showSignUp} />

            }
                        
                
              
                
         
           
            
        </div>
    );
  }
  
  export default Welcome;