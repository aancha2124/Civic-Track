import React, { useState } from 'react';
import './LoginSignup.css';

function LoginSignup() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginData);
    alert('Login successful! (Check the console)');
    setLoginData({ email: '', password: '' });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', signupData);
    alert('Sign up successful! (Check the console)');
    setSignupData({ name: '', email: '', password: '' });
  };

  return (
    <div className="auth-container"> {/* <-- CHANGE IS HERE */}
      <div className="auth-card">
        {isLoginView ? (
          // Login Form
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input type="email" id="login-email" name="email" value={loginData.email} onChange={handleLoginChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="password" value={loginData.password} onChange={handleLoginChange} required />
              </div>
              <button type="submit" className="auth-button">Login</button>
            </form>
            <p className="toggle-view">
              Don't have an account? <span onClick={() => setIsLoginView(false)}>Sign Up</span>
            </p>
          </div>
        ) : (
          // Sign Up Form
          <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="signup-name">Full Name</label>
                <input type="text" id="signup-name" name="name" value={signupData.name} onChange={handleSignupChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input type="email" id="signup-email" name="email" value={signupData.email} onChange={handleSignupChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input type="password" id="signup-password" name="password" value={signupData.password} onChange={handleSignupChange} required />
              </div>
              <button type="submit" className="auth-button">Create Account</button>
            </form>
            <p className="toggle-view">
              Already have an account? <span onClick={() => setIsLoginView(true)}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;