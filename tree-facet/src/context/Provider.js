import { Component } from 'react';
import Context from './Context';

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
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;