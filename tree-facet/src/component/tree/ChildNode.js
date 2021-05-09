import React, { useState, useContext } from "react";
import ParentNode from './ParentNode';
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { Checkbox } from '@material-ui/core';
import '../../css/childNode.css';
import Context from '../../context/Context';

const Node = ({ item }) => {

    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = item && item.children.length ? true : false;
    const { updateSelectedNode } = useContext(Context);

    const onClickCheckBox = () => {
      
      updateSelectedNode({...item, isSelected : !item.isSelected})
      if(!childVisible){
        if(!item.isSelected){
          setChildVisiblity((childVisible) => !childVisible)
        }
      }
    }

    return (
        <li className="node-list">
          {/* showing node */}
          <div >
            <div>
              <div className="inline-item">
                <Checkbox color="primary" onClick={() => onClickCheckBox()} checked={item.isSelected}/>
              </div>
  
              <div onClick={() => setChildVisiblity((childVisible) => !childVisible)} className="inline-item">
                { hasChild && 
                    (!childVisible ? <BiCaretRight/> : <BiCaretDown/>) }
                {item && item.name}
              </div>
            </div>
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