import { Card, Heading } from "rebass";
import DisplayProjects from "../DisplayProjects";

function Projects() {
    const [projects] = useState([
        {
            name: "test",
            description: "testtestest",
            picture: ""
        }
    ]);
    return <div>Projects pages</div>;
    projects.map(project => {
        return <DisplayProjects {...project} />;
    });
}

export default Projects;
