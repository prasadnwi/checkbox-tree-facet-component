import React, { useState } from "react";
import ParentNode from './ParentNode';

const Node = ({ item }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = item && item.children.length ? true : false;

    return (
        <li className="d-tree-node border-0">
          {/* showing node */}
          <div className="d-flex" onClick={(e) => setChildVisiblity((childVisible) => !childVisible)}>
            {hasChild && (
              <div
                className={`d-inline d-tree-toggler ${
                  childVisible ? "active" : ""
                }`}
              >
              </div>
            )}
    
            <div className="col d-tree-head">
              {item && item.name}
            </div>
          </div>

          {/* showing expnaded child nodes */}
          {hasChild && childVisible && (
            <div className="d-tree-content">
              <ul className="d-flex d-tree-container flex-column">
                {
                  item.children.map( (item, index) => {
                   return(
                    <ParentNode data={item} key={index}/>
                   )
                  })
                }
              </ul>
            </div>
          )}
        </li>
      );
}

export default Node;