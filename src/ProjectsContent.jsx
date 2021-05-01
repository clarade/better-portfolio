import React, { useState } from "react";
import { Row } from "reactstrap";

import junggler from "../../Assets/junggler.jpg";
import parade from "../../Assets/parade.jpg";
import aerialist from "../../Assets/aerialist.jpg";
import ShowItem from "./ShowItem";

function Shows() {
    const [items] = useState([
        {
            title: "Memory",
            subtitle: "Every monday and wednesday",
            image: junggler,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis, ipsam voluptatem quae dicta ullam quis distinctio voluptas omnis similique!"
        },
        {
            title: "Parade",
            subtitle: "Tuesday, Friday and Sunday",
            image: parade,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis, ipsam voluptatem quae dicta ullam quis distinctio voluptas omnis similique!"
        },
        {
            title: "Aerialists show",
            subtitle: "Thursday and Saturday",
            image: aerialist,
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nobis, ipsam voluptatem quae dicta ullam quis distinctio voluptas omnis similique!"
        }
    ]);
    return (
        <Row xs="3">
            {items.map(item => {
                return <ShowItem {...item} />;
            })}
        </Row>
    );
}

export default Shows;
