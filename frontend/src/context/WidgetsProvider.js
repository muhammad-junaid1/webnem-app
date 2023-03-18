import {useState, createContext} from "react";
import AllWidgetsScreen from "../screens/AllWidgetsScreen";
import UserIDScreen from "../screens/UserIDScreen";
import WidgetCreatedScreen from "../screens/WidgetCreatedScreen";

export const WidgetsContext = createContext();

const initialItems = [
    {
        title: "Instagram",
    },
    {
        title: "Twitter",
    },
    {
        title: "Facebook",
    },
    {
        title: "Linkedin"
    },
];

const SCREENS = {
    allWidgets: {
        name: "allWidgets",
        comp: <AllWidgetsScreen/>
    },
    userID: {
        name: "userID",
        comp: <UserIDScreen/>
    },
    widgetCreated: {
        name: "widgetCreated",
        comp: <WidgetCreatedScreen/>
    },
};

const WidgetsProvider = ({children}) => {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currScreen, setCurrScreen] = useState("allWidgets");

  const handleItemClick = (item) => {
    setSelectedItem(item.toString());
    setCurrScreen(SCREENS.userID.name);
  };

  const handleGoBack = () => {
    setSelectedItem(null);
    setCurrScreen(SCREENS.allWidgets.name);
  };

    const values = {
        items,
        setItems,
        selectedItem,
        setSelectedItem,
        handleItemClick,
        handleGoBack,
        currScreen,
        setCurrScreen,
        SCREENS
    };
    return <WidgetsContext.Provider value={values}>
        {children}
    </WidgetsContext.Provider>;
}

export default WidgetsProvider;
