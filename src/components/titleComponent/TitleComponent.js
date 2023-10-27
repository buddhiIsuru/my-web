import React from "react";

const titleComponentStyles = {
    display: "inline-flex",
    textTransform: "uppercase",
    width: "100%",
    letterSpacing: "0.2rem"
}
const titleStyles = {
    fontSize: "28px",
    width: "100%",
    margin: "40px 0",
    padding: 0,
    borderBottom: "5px solid #ac560d"
}

function TitleComponent({ title }) {
    return (
        <div style={titleComponentStyles}>
            <p style={titleStyles}>{title}</p>
        </div>
    )
}

export default TitleComponent;