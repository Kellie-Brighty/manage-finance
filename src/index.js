import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { themes } from "./store/themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themes}>
    <App />
  </ThemeProvider>
);
