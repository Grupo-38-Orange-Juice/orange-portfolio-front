/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import './styles.css';
// import login from '../../images/img_login.svg';
import google from '../../images/Button Google Sign in.svg';
// import DefaultButton from '../../components/default-button';
import DefaultInput from '../../components/defaultInput';

function Login() {
  const [email, setEmail] = useState();
  function handleInput(event) {
    setEmail(event.target.value);
    console.log(email);
  }
  return (
    <div>
      <div>
        {/* <img src={login} alt="Imagem de login" /> */}
        <img src={google} alt="Button Google Sign in.svg" />
      </div>
      <div>
        <h1> Entre no Orange Portfólio </h1>
        <h2> Faça login com email </h2>
        <DefaultInput title="Email address" defaultValue="email@email.com" type="email" onChange={handleInput} value={email} />
        <DefaultInput title="Password" defaultValue="" type="password" />

      </div>
    </div>
  );
}

export default Login;