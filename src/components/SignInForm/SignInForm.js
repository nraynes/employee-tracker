import React from 'react';
import {useState} from 'react';
const SignInForm = ({signup})  => {
  
 
  const [signIn, setSignIn] = useState('')
  const [password, setPassword] = useState('')
  
  function handleChangeUserid(event){
    console.log(signIn);
    setSignIn(event.target.value)
  }
  function handleChangePassword(event){
    console.log(password)
    setPassword(event.target.value)
  }


  const submit = (event) => {
    event.preventDefault();
    //prevents page from refreshing when submitted
    console.log("onsubmit: ", signIn)
  }


  //return
  if(signup) { //user is signing up for new account
    return (
      <div>
       <h2>Sign Up</h2>
       <form>
         <label for="first">First Name: </label>
         <input type="text" name="first"></input>
         <label for="last">Last Name: </label>
         <input type="text" name="last"></input>
         <label for="pass">Password: </label>
         <input type="password" name="pass"></input>
         <label for="conf">Confirm Password: </label>
         <input type="password" name="conf"></input>
         <input type="submit" name="submit"></input>
       </form>
      </div>
    );
  }

  //user is logging in
  return (
    <div>
       <h2>Sign In</h2>
       <form onSubmit={submit}>
         <label for="userid">User ID: </label>
         <input type="text" name="userid" value={signIn} onChange={handleChangeUserid}></input>
         <label for="pass">Password: </label>
         <input type="password" name="password" value={password} onChange={handleChangePassword}></input>
         <input type="submit" name="submit"></input>
       </form>
    </div>
  );
}

export default SignInForm;