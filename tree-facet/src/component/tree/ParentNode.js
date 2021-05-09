import React from "react";
import ChildNode from './ChildNode';

const ParentNode = ({ data}) => {
    return (
      <div className="content-wrapper">
        <ul>
        <ChildNode item={data}/>
        </ul>
      </div>
    );
  };

export default ParentNode;