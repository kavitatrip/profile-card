import React from "react";
import womanAvatar from "../assets/womanAvatar.png";

const ImageComponent = () => {
  return (
    <div>
      <div className="text-center justify-self-center p-8 rounded-full border-2 bg-amber-300 hover:shadow-2xl hover:shadow-yellow-200 cursor-pointer">
        <img src={womanAvatar} width="50" height="50" />
      </div>
    </div>
  );
};

export default ImageComponent;
