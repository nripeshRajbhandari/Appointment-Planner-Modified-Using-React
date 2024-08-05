import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({records}) => {  

  return (
    <div>
      {
        records.map( record => {
          const {name, ...rest} = record;
          return (
            <>
              <Tile name = {name} description = {rest} />             
            </>                         
          )
        })
      }      
    </div>
  );
};
