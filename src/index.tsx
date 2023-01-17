import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import '@feb-team/legao-react/dist/styles/css/legao.all.css'


const root = createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)