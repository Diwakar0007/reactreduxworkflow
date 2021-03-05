import React from "react";
import logo from "./logo.svg";
import PostData from "./components/PostData";
import FromData from "./components/FromData";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostData></PostData>
        <FromData />
      </div>
    </Provider>
  );
};

export default App;
