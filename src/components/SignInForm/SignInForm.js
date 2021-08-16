import React from 'react';

function SignInForm({signup}) {
  if(signup) {
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
  return (
    <div>
       <h2>Sign In</h2>
       <form>
         <label for="userid">User ID: </label>
         <input type="text" name="userid"></input>
         <label for="pass">Password: </label>
         <input type="password" name="password"></input>
         <input type="submit" name="submit"></input>
       </form>
    </div>
  );
}

export default SignInForm;