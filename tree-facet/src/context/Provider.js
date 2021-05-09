import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { updateNodeSelection, updateAllNodes } from '../util/data';

class Provider extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodeList: []
        };
    } 

    render(){
        return (
            <Context.Provider
            value={{
                nodeList: this.state.nodeList,
                setNodeList: nodeList => {
                    this.setState({
                        nodeList
                    })
                },
                updateSelectedNode: (updatedNode) => {
                    let nodeList = updateNodeSelection(this.state.nodeList, updatedNode);
                    this.setState({
                        nodeList
                    })
                },
                unDoSelection: () => {
                    let nodeList = updateAllNodes(this.state.nodeList, false);
                    this.setState({
                        nodeList
                    })
                },
                selectAll: () => {
                    let nodeList = updateAllNodes(this.state.nodeList, true);
                    this.setState({
                        nodeList
                    })
                }

            }}>

                {this.props.children}

            </Context.Provider>
        )
    }
}

Provider.propTypes = {
    children: PropTypes.any
  };

export default Provider;