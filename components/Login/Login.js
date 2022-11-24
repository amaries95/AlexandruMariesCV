import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../Store/login';
import classes from './Login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const loginDispatcher = useDispatch();
  const navigate = useNavigate();

  const baseUrl = useSelector(state => state.routes.baseUrl);
  const userLogin = useSelector(state => state.routes.userLogin);

  var [responseMessage, setResponseMessage] = useState(null);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const response = await fetch(baseUrl + userLogin,
    {
      method: 'POST',
      body: JSON.stringify({
        username: enteredEmail,
        password: enteredPassword
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if(response.status == 200)
    {
      var responseJson = await response.json();

      if(responseJson.result.data != null)
      {
        loginDispatcher(loginActions.saveToken(responseJson.result.data));
        loginDispatcher(loginActions.login());
        navigate("/references");
      }
      else{
        setResponseMessage(responseJson.result.message);
      }
    }    
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
      {responseMessage && <label>{responseMessage}</label>}

    </section>
  );
};

export default Login;
