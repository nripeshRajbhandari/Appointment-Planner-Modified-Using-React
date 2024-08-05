import React from "react";

export const Tile = ({name, description}) => {

  const descriptionCatagories = Object.keys(description);

  return (
    <div className="tile-container"> 
        <h4 >Name:</h4><p className="tile tile-title">{name}</p>
        <br />
        {descriptionCatagories.map( catagory => (<><h4>{catagory}:</h4><p className="tile">{description[catagory]}</p><br /></>))}
        {/* <h4 >Phone:</h4><p className="tile"> {description.phone}</p>
        <br />
        <h4 >Email:</h4><p className="tile">{description.email}</p>       */}
    </div>
  );
};
