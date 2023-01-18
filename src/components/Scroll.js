import React from "react";

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border:'5px solid black', height: '800px', margin: '0px'}}>
      {props.children}
    </div>
  )
}

export default Scroll
