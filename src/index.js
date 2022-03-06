import React from "react";
import { render } from "react-dom";
import DraggableContainer from "./components/draggableContainer";
import Menu from "./components/menu";
import "uikit/dist/css/uikit.min.css";
import "./styles.css";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Menu />

        </div>
    );
}


render(<App />,document.getElementById("root"));
