import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import DataFile from "./DataFile";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import DateUser from "./DateUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <HashRouter>
      <DataFile>
        <DateUser>
          <App />
        </DateUser>
      </DataFile>
    </HashRouter>
  </ThemeProvider>
);
