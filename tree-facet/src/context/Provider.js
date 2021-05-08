import { Component } from 'react';
import Context from './Context';
import {updateNodeSelection} from '../util/data';

class Provider extends Component {
    state = {
        nodeList: []
    };

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
                updateSelectedNode : (updatedNode) => {
                    let updatedTree = updateNodeSelection(this.state.nodeList, updatedNode);
                    this.setState({
                        nodeList: updatedTree
                    })
                }
            }}>
                {this.props.children}
                
            </Context.Provider>
        )
    }
}

export default Provider;