import React from "react";
import useLocalStorage from "use-local-storage";
import "../src/index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <p>icons</p>
          </div>
          <div className="divider">
            <span>Or</span>
          </div>
          <form action="">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="" />
            <label htmlFor="email">paassword</label>
            <input type="password" name="password" id="" />
            <div className="remember">
              <input type="checkbox" checked="checked" />
              <p>Remember me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>forget your password</p>
            <a href="#">reset password</a>
          </div>
          <div>
            <p className="create">create account</p>
          </div>
          <div className="theme-toggle">
            <h2 onClick={switchTheme}>light theme</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
