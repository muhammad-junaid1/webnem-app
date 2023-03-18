import { FaPlus, FaTimes } from "react-icons/fa";

function AllowedOriginsInput({urls, setUrls}) {

  function handleChange(index, event) {
    const newUrls = [...urls];
    newUrls[index].value = event.target.value.trim();
    setUrls(newUrls);
  }

  function handleAdd() {
    if(urls[urls.length-1].value !== "") {
        const newUrls = [...urls, { value: "" }];
        setUrls(newUrls);
    }
  }

  function handleRemove(index) {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setUrls(newUrls);
  }

  return (
    <>
      {urls.map((url, index) => (
        <div key={index} className="allowed-origins-container">
          <input
            type="text"
            placeholder="Enter URL(s)"
            value={url.value}
            onChange={(event) => handleChange(index, event)}
          />
          {index === urls.length - 1 && (
            <button type="button" onClick={handleAdd}>
              <FaPlus />
            </button>
          )}
          {index !== urls.length - 1 && (
            <button type="button" onClick={() => handleRemove(index)}>
                <FaTimes/>
            </button>
          )}
        </div>
      ))}
      </>
  );
}

export default AllowedOriginsInput;