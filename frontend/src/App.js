import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </Switch>
    </div>
  );
}

export default App;
