import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Menu from "./components/Menu";

function App() {
  return (
    //npm i react-router-dom indirdik
    <BrowserRouter>
      <Menu />
      <div className="content">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
