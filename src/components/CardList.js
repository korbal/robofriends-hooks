import React from "react";
import Card from "./Card.js";

const Cardlist=({robots})=>{

  return(
    <div>
      {
        robots.map((robot, i)=>{
          return (
          <Card 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            key={robots[i].id} />)
        })
      }
      
    </div>
  )
}

export default Cardlist;