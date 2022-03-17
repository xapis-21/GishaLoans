import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Auth() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  return (
    <div className='w-full h-screen absolute bg-yellow-500'>
        <div className="h-fit p-2" style={{width:'300px'}}>
            <form action="">
                <div>
                    <input type="text" placeholder='Enter Email' required/>
                </div>
                <div>
                    <input type="password" placeholder='Enter Password' required/>
                </div>
                <button type='submit'>SIGN IN</button>
            </form>
        </div>
    </div>
  )
}

export default Auth