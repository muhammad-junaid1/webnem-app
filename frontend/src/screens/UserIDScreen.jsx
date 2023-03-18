import { useState, useContext } from "react";
import { WidgetsContext } from "../context/WidgetsProvider";
import icons from "../icons/fa-icons";

const UserIDScreen = () => {
    const {selectedItem, handleGoBack} = useContext(WidgetsContext);

    const [userId, setUserId] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the user input
    };

    const capitalize = (text) => {
        return `${text[0].toUpperCase()}${text.slice(1, text.length)}`;
    }

    return (
      <div className="container">
        <div className="details-title">
            {icons[selectedItem.toLowerCase()]}
            <h1>{capitalize(selectedItem)}</h1>
        </div>
        <div className="details-container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="userId">User ID:</label>
              <input
                placeholder="@user"
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <button className="submit-btn" type="submit">
                Create Widget 
            </button>
          </form>
          <button className="goBack-btn" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  };

  export default UserIDScreen;