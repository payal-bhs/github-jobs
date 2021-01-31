import React from "react";
import ReactDOM from "react-dom";
// import { Route, Router } from "react-router";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App/App.component";
import reducer from "./store/reducer";
import "./index.style.css";
import { createStore } from "redux";

const store = createStore(reducer);
// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <App />
//         </Router>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode >,
    document.getElementById("root")
);
// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <Router>
//                 <Switch>
//                     <Route path="/">
//                         <App />
//                     </Route>
//                 </Switch>
//             </Router>
//         </Provider>
//     </React.StrictMode >,
//     document.getElementById("root")
// );
