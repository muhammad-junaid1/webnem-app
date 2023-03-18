import { useContext, useEffect } from "react";
import { WidgetsContext } from "../context/WidgetsProvider";
import icons from "../icons/fa-icons";

const AllWidgetsScreen = () => {
    const {items, handleItemClick} = useContext(WidgetsContext);

    return (
      <div className="container">
        <h1 className="title">Select Widget:</h1>
        <div className="grid-container">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid-item ${item.title.toLowerCase()}`}
              onClick={() => handleItemClick(item.title)}
            >
              <div className="item-icon">
                {icons[item.title.toLowerCase()]}
              </div>
              <div className="item-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default AllWidgetsScreen;