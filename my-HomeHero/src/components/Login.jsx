import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login =({onlogin}) => {
    const handlelogin = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            onlogin(result.user);
        }
        catch(error) {
            console.error("please fill in the requirement", error);
        }
    }
    return(
        <div className='login'>
            <h2>SIgnIn</h2>
            <button onClick={handlelogin}>Sign in</button>
        </div>
    )
       
}

export default Login;