import React, { useState } from "react";
import ParentNode from './ParentNode';
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { Checkbox } from '@material-ui/core';
import '../../css/childNode.css';

const Node = ({ item }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = item && item.children.length ? true : false;

    return (
        <li className="node-list">

          {/* showing node */}
          <div onClick={(e) => setChildVisiblity((childVisible) => !childVisible)}>
          <Checkbox color="primary"/>
          { hasChild && 
              (!childVisible ? <BiCaretRight/> : <BiCaretDown/>) }
          {item && item.name}
          </div>

          {/* showing expnaded child nodes */}
          {hasChild && childVisible && (
            <div>
              <ul>
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