import React from "react";
import ImageComponent from "./ImageComponent";
import DescriptionComponent from "./DescriptionComponent";
import ConnectionTools from "./ConnectionTools";

const ProfileCard = () => {
  return (
    <div>
      <div className="shadow-lg m-2 w-100 h-100 rounded-lg text-center justify-self-center border p-5">
        <ImageComponent />
         <div className="font-mono text-md font-bold p-5">Kavita Tripathi</div>
        <div className="flex justify-center align-middle pt-5">
            <DescriptionComponent />
        </div>
        <ConnectionTools />
      </div>
    </div>
  );
};

export default ProfileCard;
