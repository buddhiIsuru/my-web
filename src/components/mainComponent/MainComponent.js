import React from "react";

const mainStyle = {
    width: "100 %",
    maxHeight: "100vh",
    height: "100vh"
}

function MainComponent({ children }) {
    return (
        <div style={mainStyle}>
            {children}
        </div>
    )
}

export default MainComponent;