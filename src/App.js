import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ComponentsPage } from "./pages/ComponentsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="page-body" className="bg-indigo-50">
          <Switch>
            <Route path="/components" component={ComponentsPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
