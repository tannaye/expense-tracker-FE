import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Expense from "./pages/dashboard/expense";
import Category from "./pages/dashboard/category";
import EachCategory from "./pages/dashboard/eachCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/expenses" component={Expense} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/category/:id" component={EachCategory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
