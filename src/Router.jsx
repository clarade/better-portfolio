import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Navigation from "./Navigation.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/project" component={Projects} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
