import { Button, Text } from "rebass";

function Display({ name, description, picture, id }) {
    // const [popoverOpen, setPopoverOpen] = useState(false);

    // const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <>
            <img alt={name} src={picture} />
            <h1>{name}</h1>
            <span>
                <Button
                    className="mr-1"
                    color="secondary"
                    id={id}
                    type="button"
                ></Button>
                <Text>Popover Title</Text>
                <Text>{description}</Text>
            </span>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            ></div>
        </>
    );
}

export default Display;
