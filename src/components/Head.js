import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestion] = useState([]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    //API call
    // console.log(searchValue);
    // make an API call after every key press

    // If the diff btw 2 API calls < 200ms - decline the api call
    if (searchValue) {
      const timer = setTimeout(() => getSearchSuggestions(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchValue]);

  /*
* key -i
*  - render the component
   - useEffect()
   - start the timer => make api call after 200ms
*  key - ip
   - destroy the component (useEffect return method)
*  - render the component
   - useEffect()
   - start the timer => make api call after 200ms
*
*/

  //   search api has cors enabled and not allowing any requests directly from browser.
  // We may need to write a proxy which calls the seacrh api in the BE and that BE has to be consmed by ur react app for seacrh results

  const getSearchSuggestions = async () => {
    console.log("api call", searchValue);
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchValue, {
        mode: "no-cors",
        headers: {
          mode: "no-cors",
          // Add necessary headers if required, for example:
          "Content-Type": "application/json",
          // If the API requires an API key, include it here:
          // 'Authorization': `Bearer YOUR_API_KEY`,
        },
      });

      const data = ["iphone pro max", "iphone 15", "iphone 14","iphone 15 pro max", "iphone xr", "iphone 14 pro max"];
      setSuggestion(data);
      // setSearchSuggestionValues(data);
      console.log(data);
      
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 mx-2 cursor-pointer"
          alt="hamburger-menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img
            className="h-5 mx-3"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
        <div className="fixed py-2 px-2 w-[27rem] bg-white shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                🔍{s}
              </li>
            ))}

            {/* <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍iphone 8 </li>
          <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍iphone 14 </li>
          <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍iphone 14 pro max </li>
          <li className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍iphone 14 pro </li> */}
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
