import React from "react";
import PropTypes from 'prop-types';
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

ParentNode.propTypes = {
  data: PropTypes.object
};

export default ParentNode;