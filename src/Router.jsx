import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
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
