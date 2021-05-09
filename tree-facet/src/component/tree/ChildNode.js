import React, { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import ParentNode from './ParentNode';
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { Checkbox } from '@material-ui/core';
import '../../css/childNode.css';
import Context from '../../context/Context';

const Node = ({ item }) => {

    const [visibalChild, setChildVisiblity] = useState(false);
    const { updateSelectedNode, isTreeExpanded } = useContext(Context);
    const hasChild = item && item.children.length ? true : false;

    const onClickCheckBox = () => { 
      updateSelectedNode({...item, isSelected : !item.isSelected})

      if(!visibalChild){
        if(!item.isSelected){
          setChildVisiblity((visibalChild) => !visibalChild)
        }
      }
    }

    const getChildVisibility = () => {
      return (isTreeExpanded ? true : (visibalChild ? true : false))
    }

    useEffect(() => {
       if(isTreeExpanded && !visibalChild){
        setChildVisiblity(true);
      } 
      else if (!isTreeExpanded && visibalChild){
        setChildVisiblity(false);
      }
    },[isTreeExpanded]);

    const onClickItem = () => {
      setChildVisiblity(!visibalChild)
    }

    return (
        <li className="node-list">
          {/* showing node */}
          <div >
            <div>
              <div className="inline-item">
                <Checkbox color="primary" onClick={onClickCheckBox} checked={item.isSelected} inputProps={{ 'aria-label': `select ${item && item.name}`}}/>
              </div>
  
              <div onClick={onClickItem} className="inline-item">
                { hasChild ?
                    (!visibalChild ? <BiCaretRight/> : <BiCaretDown/>)  :
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                }
                {item && item.name}
              </div>
            </div>
          </div>
         

          {/* showing expnaded child nodes */}
          {hasChild && getChildVisibility() && (
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

Node.propTypes = {
  item: PropTypes.object
};

export default Node;