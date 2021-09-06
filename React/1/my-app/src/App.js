import "./App.css";
import Home from "./page/home/Home";
import Todo from "./page/todo/Todo";
import { Route } from "react-router-dom";
import Project from "./page/project/Project";
import Login from "./page/login/Login";
import Signin from "./page/signin/Signin";
function App() {
  return (
    <div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Todo">
        <Todo />
      </Route>
      <Route path="/Project">
        <Project />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signin">
        <Signin />
      </Route>
    </div>
  );
}

export default App;
