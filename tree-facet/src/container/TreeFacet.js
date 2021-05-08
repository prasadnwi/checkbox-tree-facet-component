import React from "react";
import '../css/treeFacet.css';
import ParentNode from '../component/tree/ParentNode';
import data  from '../data/response.json';
import { convertToHierarchy } from '../util/data';

class TreeFacet extends React.Component{
    state = {
        listOfNodes: []
    }

    componentDidMount(){
        this.setState({
            listOfNodes: convertToHierarchy(data.data.categories)
        })
    }

    render(){
        return (
            <div>
                {this.state.listOfNodes.map((node, index) => {
                    return (
                        <ParentNode data = {node} key={index}/>
                    )
                })}
            </div> 
        )
    }    
}

export default TreeFacet;