import "./App.styles.scss";

// toastify setup
import "react-toastify/dist/ReactToastify.css";

import { ToastifyContainer } from "components";
import { AppRoutes } from "routes";
import { useAppSelector } from "hooks";
import { selectTheme } from "./store";

function App() {
  const { mode } = useAppSelector(selectTheme);
  return (
    <div role={"application"} className={"app"} data-theme={mode}>
      <AppRoutes />
      <ToastifyContainer />
    </div>
  );
}

export default App;
