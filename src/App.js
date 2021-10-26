import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ComponentsPage } from "./pages/ComponentsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/components" component={ComponentsPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
