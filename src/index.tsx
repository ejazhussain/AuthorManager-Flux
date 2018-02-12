import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app/app";
//import generated css file here as well. so webpack can combine into bundle as well

import 'bootstrap/scss/bootstrap.scss';
import "./styles/styles.scss";
import initializeActions from "./Actions/initializeActions";

initializeActions.initApp();


const ROOT = document.querySelector(".container");
ReactDOM.render(<App name="Author Manager React Flux" />, ROOT);
