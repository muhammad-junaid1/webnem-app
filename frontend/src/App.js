import { useContext } from "react";
import "./styles/SelectWidget.styles.css";
import { WidgetsContext } from "./context/WidgetsProvider";

const App = () => {
  const { currScreen, SCREENS } = useContext(WidgetsContext);
  return SCREENS[currScreen].comp;
};

export default App;
