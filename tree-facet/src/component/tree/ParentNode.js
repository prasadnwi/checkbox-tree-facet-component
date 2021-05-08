import React from "react";
import ChildNode from './ChildNode';

const ParentNode = ({ data}) => {
    return (
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-column">
        <ChildNode item={data}/>
        </ul>
      </div>
    );
  };

export default ParentNode;