import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Music",
    "Live",
    "Cricket",
    "News",
    "Gaming",
    "Chakras",
  ];
  return (
    <div className="flex w-full overflow-x-auto whitespace-nowrap hide-scrollbar">
      {list.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;


